import express from "express";
import nodemailer from "nodemailer";
import "dotenv/config";

const router = express.Router();

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.status(400).json({ msg: "Please fill all the fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "nathanxdinhx97@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "nathanxdinhx97@gmail.com",
    subject: `Message from ${data.name} - Portfolio Website`,
    html: `
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>`,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please fill all the fields" });
      res.status(200).json({ msg: "Thank you for contacting Nathan!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});

export default router;
