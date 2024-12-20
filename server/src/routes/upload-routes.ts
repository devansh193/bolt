import express from "express";
import { getData, uploadData } from "../controller/upload-controller";

const router = express.Router();
router.post("/upload", uploadData);
router.get("/getData", getData);
export default router;
