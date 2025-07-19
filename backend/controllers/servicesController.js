export const getServices = (req, res) => {
  res.render("services");
};

export const getPrivateLimitedPage = (req, res) => {
  res.render('services/plc');
};