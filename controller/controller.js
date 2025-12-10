const index_render = (req, res) => {
  try {
    res.render("index");
    console.log("Loaded in homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

const redirect_to_first = (req, res) => {
  res.redirect("/setting_up_vm");
};

const render_ubuntu_install = (req, res) => {
  try {
    res.render("ubuntu_install");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  index_render,
  redirect_to_first,
  render_ubuntu_install
};
