import { Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";

import { RegisterRequest } from "../types/authTypes";
import { prisma } from "../db";

const router = Router();

router.post(
  "/register",
  asyncHandler(async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body as RegisterRequest;

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Failed to create user");
    }
  })
);

export default router;
