import express from "express";
import { getEnrollmentPage, submitEnrollment } from "../controllers/enrollController.js";

const router = express.Router();

router.get("/enroll.html", getEnrollmentPage);
router.post("/enroll", submitEnrollment);

export default router;
