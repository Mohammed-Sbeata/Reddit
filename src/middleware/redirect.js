const redirect = (req, res) => {
  res.status(200).redirect('/page/home');
};

module.exports = redirect;
