const logout = (req, res) => {
  res.clearCookie('token').redirect('/page/index');
};

module.exports = logout;
