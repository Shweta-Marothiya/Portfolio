const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            title: "ApnaVideoCall",
            description:
                "Real-time video calling application built using React.js, Node.js, WebRTC and Socket.IO.",
            live: "https://apnavideocallfrontend-xt4c.onrender.com",
            github: "#"
        },
        {
            title: "Zerodha Clone",
            description:
                "Responsive frontend clone of Zerodha trading platform.",
            live: "#",
            github: "#"
        }
    ]);
});

module.exports = router;