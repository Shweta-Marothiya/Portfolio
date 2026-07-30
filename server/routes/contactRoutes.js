const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            html: `
                <h3>New Portfolio Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
});

module.exports = router;