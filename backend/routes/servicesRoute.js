import express from "express";
<<<<<<< HEAD
import { getServices,getPrivateLimitedPage, getLimitedLiabilityPage, getOnePersonCompanyPage, getSoleProprietorshipPage, getPartnershipPage, getBookkeepingPage, getFinancialStatementsPage, getTaxPage, getTaxCompliancePage, getAuditSupportPage , getBpoPage, getEnterprisePage, getVirtualPage , getStartupPage , getFinancialPage} from "../controllers/servicesController.js";
=======
import { getServices,getPrivateLimitedPage, getLimitedLiabilityPage, getOnePersonCompanyPage, getSoleProprietorshipPage, getPartnershipPage, getBookkeepingPage, getFinancialStatementsPage, getTaxPage, getTaxCompliancePage, getAuditSupportPage } from "../controllers/servicesController.js";
>>>>>>> 90b34edd0340dfc84a48a1ee07696366351c994b

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
<<<<<<< HEAD

router.get("/services/bpo", getBpoPage);
router.get("/services/enterprise", getEnterprisePage);
router.get("/services/virtual", getVirtualPage);
router.get("/services/startup", getStartupPage);
router.get("/services/financial", getFinancialPage);
export default router;
=======
export default router;
>>>>>>> 90b34edd0340dfc84a48a1ee07696366351c994b
