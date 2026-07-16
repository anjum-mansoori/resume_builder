require("dotenv").config();
const authRoutes = require("./routes/auth");
const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resume");

const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
    res.send("API Running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});