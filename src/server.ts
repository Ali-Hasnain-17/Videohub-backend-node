import express, { Request, Response } from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(errorHandler);

// routes
app.use("/api/auth", authRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
