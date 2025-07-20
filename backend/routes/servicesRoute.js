import express from "express";
import { getServices,getPrivateLimitedPage, getLimitedLiabilityPage } from "../controllers/servicesController.js";

const router = express.Router();
router.get("/services", getServices);
router.get("/services/private-limited-company", getPrivateLimitedPage);
router.get("/services/limited-liability-partnership", getLimitedLiabilityPage);
export default router;
