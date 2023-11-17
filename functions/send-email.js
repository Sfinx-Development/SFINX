import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "angelinaholmqvist@live.se",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const handler = async function (event) {
  try {
    console.log("Anrop mottaget till /api/send-email");

    // Läs data från request body
    const { recipient, subject, text } = JSON.parse(event.body);

    // Konfigurera e-postalternativ
    const mailOptions = {
      from: "angelinaholmqvist@live.se",
      to: recipient,
      subject: subject,
      text: text,
    };

    // Skicka e-post
    transporter.verify((error, success) => {
      if (error) {
        console.log("Verifieringsfel:", error);
      } else {
        console.log("Transportör verifierad:", success);
      }
    });

    // Lägg till debug-logging
    transporter.on("log", (log) => {
      console.log(log);
    });

    console.log("FÖRE SKICKAR MAIL");
    const info = await transporter.sendMail(mailOptions);
    console.log("EFTER SKICKAR MAIL", "Tid:");

    // Returnera svar
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "E-post skickad", info }),
    };
  } catch (error) {
    console.error("Fel vid sändning av e-post:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Fel vid sändning av e-post" }),
    };
  }
};
