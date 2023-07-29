import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";

dotenv.config();
await connectDB();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is a simple API response!' });
});

app.use("/api/user", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
