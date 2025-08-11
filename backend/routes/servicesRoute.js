import express from "express";
import { getServices,getPrivateLimitedPage, getLimitedLiabilityPage, getOnePersonCompanyPage, getSoleProprietorshipPage, getPartnershipPage, getEnterprisePage } from "../controllers/servicesController.js";

const router = express.Router();
router.get("/services", getServices);
router.get("/services/private-limited-company", getPrivateLimitedPage);
router.get("/services/limited-liability-partnership", getLimitedLiabilityPage);
router.get("/services/one-person-company", getOnePersonCompanyPage);
router.get("/services/sole-proprietorship", getSoleProprietorshipPage);
router.get("/services/partnership", getPartnershipPage);
router.get("/services/enterprise", getEnterprisePage);
export default router;
