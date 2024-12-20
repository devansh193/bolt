import { Request, Response } from "express";
import prisma from "../config/db";
import { ObjectId } from "mongodb";

export const uploadData = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "No text provided" });
    }
    await prisma.textData.create({
      data: {
        text,
      },
    });
    res.status(200).json({ message: "Data uploaded successfully" });
  } catch (error) {
    console.error("Error uploading data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getData = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }
    const data = await prisma.textData.findUnique({
      where: {
        id: id,
      },
    });
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
