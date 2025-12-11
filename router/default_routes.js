const router = require("express").Router();

const controller = require("../controller/controller.js");

router.get("/", controller.redirect_to_first);

router.get("/setting_up_vm", controller.index_render);

router.get("/ubuntu_install", controller.render_ubuntu_install);

router.get("/setting_up_server_with_nodemon", controller.render_node_server)

module.exports = router;
