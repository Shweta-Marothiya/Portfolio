const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        name: "Shweta",
        role: "Full Stack Web Developer",
        location: "Noida",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB"
        ]
    });
});

module.exports = router;