// import bodyParser from "body-parser";
// import cors from "cors";
// import express from "express";
// import nodemailer from "nodemailer";

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors({ origin: "https://guileless-unicorn-087c71.netlify.app" }));
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: "hotmail",
//   auth: {
//     user: "angelinaholmqvist@live.se",
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// app.post("/api/send-email", async (req, res) => {
//   try {
//     console.log("Anrop mottaget till /api/send-email");
//     const { recipient, subject, text } = req.body;

//     const mailOptions = {
//       from: "angelinaholmqvist@live.se",
//       to: recipient,
//       subject: subject,
//       text: text,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     res.json({ message: "E-post skickad", info });
//   } catch (error) {
//     console.error("Fel vid sändning av e-post:", error);
//     res.status(500).json({ error: "Fel vid sändning av e-post" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server lyssnar på port ${port}`);
// });
