import express from "express";
import { getServices,getPrivateLimitedPage } from "../controllers/servicesController.js";

const router = express.Router();
router.get("/services", getServices);
router.get("/services/private-limited-company", getPrivateLimitedPage);

export default router;
