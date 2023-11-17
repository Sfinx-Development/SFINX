import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "angelinaholmqvist@live.se",
    pass: "Manasigo0065",
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { recipient, subject, text } = req.body;

    const mailOptions = {
      from: "angelinaholmqvist@live.se",
      to: recipient,
      subject: subject,
      text: text,
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({ message: "E-post skickad", info });
  } catch (error) {
    console.error("Fel vid sändning av e-post:", error);
    res.status(500).json({ error: "Fel vid sändning av e-post" });
  }
});

app.listen(port, () => {
  console.log(`Server lyssnar på port ${port}`);
});