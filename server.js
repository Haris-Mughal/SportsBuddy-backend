import express from "express";
const connectDB = require("./config/db");

const cors = require("cors");

require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`*--- Server is running on port: ${PORT} ---*`)
);
