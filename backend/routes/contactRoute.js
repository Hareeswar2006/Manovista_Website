import express from "express";
import { getContact, submitContact } from "../controllers/contactController.js";

const router = express.Router();
router.get("/contact", getContact);
router.post("/submit-contact", submitContact);

export default router;
