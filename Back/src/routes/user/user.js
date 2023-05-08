const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  deleteUser,
  logoutUser,
} = require("../../controller/userController");
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/:id", deleteUser);
router.post("/logout", logoutUser);

module.exports = router;
