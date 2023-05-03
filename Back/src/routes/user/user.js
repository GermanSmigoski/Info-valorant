const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
} = require("../../controller/userController");
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
