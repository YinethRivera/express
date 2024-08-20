const express = require("express");
const { UserGet, UserPost, UserPut, UserDelete } = require("../controllers/UsersControllers");
const router = express.Router();

router.get("/usuarios", UserGet);
router.post("/usuarios", UserPost);
router.put("/usuarios/:uid_usuario", UserPut);
router.delete("/usuarios/:uid_usuario", UserDelete);

module.exports = router;
