const { User } = require("../db");
const bcrypt = require("bcrypt");
const e = require("express");
const Joi = require("joi");
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
    let { name, password, email } = req.body;
    const schemaRegister = Joi.object({
      name: Joi.string().min(6).max(255).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(6).max(1024).required(),
    });
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    const emailExist = await User.findOne({ where: { email: email } });
    const { error } = schemaRegister.validate(req.body);
    const options = {
      where: { email: email, password: passwordHashed, name: name },
    };
    try {
      if (emailExist) return res.status(400).send("Email already exists");
      if (error)
        return res.status(400).json({ error: error.details[0].message });
      if (!name || !password || !email) {
        return "Faltan ingresar datos";
      } else {
        const newUser = User.findOrCreate(options);
      }
      res.status(200).send("user created");
    } catch (e) {
      res.status(404).send(e);
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const schemaLogin = Joi.object({
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(6).max(1024).required(),
    });
    const { error } = schemaLogin.validate(req.body);
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
      res.send({ token: token, message: "User logged" });
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
