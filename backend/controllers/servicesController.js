export const getServices = (req, res) => {
  res.render("services");
};

export const getPrivateLimitedPage = (req, res) => {
  res.render('services/plc');
};

export const getLimitedLiabilityPage = (req, res) => {
  res.render('services/llp');
};