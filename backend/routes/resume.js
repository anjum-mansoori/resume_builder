const express = require("express");
const Resume = require("../models/Resume");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
    try {
        const resume = await Resume.create({ ...req.body, userId: req.user.userId });

        res.status(201).json(resume);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

router.get("/", authMiddleware, async (req, res) => {
    try {
        const resumes = await Resume.find({
            userId: req.user.userId
        });

        res.json(resumes);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
);

router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user.userId
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            });
        }

        res.json(resume);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.userId
            },
            req.body,
            {
                new: true // with new: true mongodb returns updated data
            }
        );
        res.json(resume);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/:id", authMiddleware, async (req, res) => {

    await Resume.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.userId
    });

    res.json({ message: "Resume Deleted" });

});

module.exports = router;