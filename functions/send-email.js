import nodemailer from "nodemailer";

export const handler = async function (event) {
  try {
    console.log("Anrop mottaget till /api/send-email");

    // Läs data från request body
    const { recipient, subject, text } = JSON.parse(event.body);

    // Konfigurera Nodemailer
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "angelinaholmqvist@live.se",
        pass: "Manasigo0065",
      },
    });

    // Konfigurera e-postalternativ
    const mailOptions = {
      from: "angelinaholmqvist@live.se",
      to: recipient,
      subject: subject,
      text: text,
    };

    // Skicka e-post
    const info = await transporter.sendMail(mailOptions);

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
