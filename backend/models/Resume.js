const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // This field will store a MongoDB ID
            ref: "User", // It simply tells Mongoose: This ID belongs to User model
            required: true
        },

        fullName: String,
        email: String,
        phone: String,
        address: String,
        summary: String,

        education: [
            {
                college: String,
                degree: String,
                year: String
            }
        ],

        experience: [
            {
                company: String,
                role: String,
                duration: String,
                description: String
            }
        ],

        skills: [String],

        template: {
            type: String,
            default: "classic"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Resume", ResumeSchema);