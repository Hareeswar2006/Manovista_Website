export const getServices = (req, res) => {
  res.render("services");
};

export const getPrivateLimitedPage = (req, res) => {
  res.render('incorporation_services/plc');
};

export const getLimitedLiabilityPage = (req, res) => {
  res.render('incorporation_services/llp');
};

export const getOnePersonCompanyPage = (req, res) => {
  res.render('incorporation_services/opc');
};

export const getSoleProprietorshipPage = (req, res) => {
  res.render('incorporation_services/sole');
};

export const getPartnershipPage = (req, res) => {
  res.render('incorporation_services/partnership');
};



export const getBookkeepingPage = (req, res) => {
  res.render('accounting-and-bookkeeping-services/bookkeeping');
};

export const getTaxCompliancePage = (req, res) => {
  res.render('accounting-and-bookkeeping-services/tax-compliance');
};

export const getFinancialStatementsPage = (req, res) => {
  res.render('accounting-and-bookkeeping-services/financial-statements');
};

export const getTaxPage = (req, res) => {
  res.render('accounting-and-bookkeeping-services/tax');
};

export const getAuditSupportPage = (req, res) => {
  res.render('accounting-and-bookkeeping-services/audit-support');
};




export const getEnterprisePage = (req, res) => {
  res.render('management_consulting/enterprise');
};

export const getVirtualPage = (req, res) => {
  res.render('management_consulting/virtual');
};

export const getStartupPage = (req, res) => {
  res.render('management_consulting/startup');
};

export const getFinancialPage = (req, res) => {
  res.render('management_consulting/financial');
};

export const getBpoPage = (req, res) => {
  res.render('management_consulting/bpo');

};

export const getHiringStaffingPage = (req, res) => {
  res.render('hrmanagement/hiring_staff'); 
};

export const getTalentSupplyPage = (req, res) => {
  res.render('hrmanagement/talent_supply');
};

export const getPayrollSupportPage = (req, res) => {
  res.render('hrmanagement/payroll_support');
};

export const getHrOperationManagementPage = (req, res) => {
  res.render('hrmanagement/hr_operation_management'); 
};

export const getEmployeeTrainingPage = (req, res) => {
  res.render('hrmanagement/training_coordination'); 
};