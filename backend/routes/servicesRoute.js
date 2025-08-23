import express from "express";
import { getServices,getPrivateLimitedPage, getLimitedLiabilityPage, getOnePersonCompanyPage, getSoleProprietorshipPage, getPartnershipPage, getBookkeepingPage, getFinancialStatementsPage, getTaxPage, getTaxCompliancePage, getAuditSupportPage } from "../controllers/servicesController.js";

const router = express.Router();
router.get("/services", getServices);
router.get("/services/private-limited-company", getPrivateLimitedPage);
router.get("/services/limited-liability-partnership", getLimitedLiabilityPage);
router.get("/services/one-person-company", getOnePersonCompanyPage);
router.get("/services/sole-proprietorship", getSoleProprietorshipPage);
router.get("/services/partnership", getPartnershipPage);
router.get("/services/bookkeeping", getBookkeepingPage);
router.get("/services/preparation-of-financial-statements", getFinancialStatementsPage);
router.get("/services/tax-preparation-filings", getTaxPage);
router.get("/services/tax-compliance-advisory", getTaxCompliancePage);
router.get("/services/internal-external-audit-support", getAuditSupportPage);
export default router;
