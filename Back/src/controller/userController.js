const { User } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      let allUsers = await User.findAll();
      res.status(200).send(allUsers);
    } catch (e) {
      res.status(404).send(e);
    }
  },
  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findOne({
        where: { id: id },
      });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("user not found");
      }
    } catch (e) {
      res.status(500).send(e);
    }
  },
  registerUser: async (req, res) => {
    const { name, password, email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).send("Email is required");
    }
    // Check if password is provided
    if (!password) {
      return res.status(400).send("Password is required");
    }
    // Check if user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).send("Email already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).send({ user: newUser, message: "User created" });
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const token = jwt.sign(
      { name: user?.name, id: user?.id, email: email },
      process.env.SECRET_TOKEN
    );
    try {
      if (error)
        return res.status(400).send({ error: error.details[0].message });
      if (!user) return res.status(404).send("Invalid credentials");
      const passwordValidated = await bcrypt.compare(password, user.password);
      if (!passwordValidated)
        return res.status(400).send("Invalid credentials");
      res.send({ token: token, message: "User logged" }).header("auth-token");
    } catch (e) {
      res.status(404).send(e);
    }
  },
  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findOne(id);
      if (!user) return res.status(404).send("User not found");
      await user.destroy();
      res.status(200).send("User deleted succesfully");
    } catch (e) {
      res.status(500).send(e);
    }
  },
  logoutUser: async (req, res) => {
    try {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/user/login");
        }
      });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
