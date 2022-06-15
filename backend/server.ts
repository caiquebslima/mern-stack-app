import { Router, Request, Response } from "express";
import express from "express";
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/goals", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
