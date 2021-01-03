import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
//All Routes 
import authRoutes from "./routes/auth.js" 
import UserRoutes from "./routes/user.js"
dotenv.config()
// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", UserRoutes)


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
