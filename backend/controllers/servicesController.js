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
