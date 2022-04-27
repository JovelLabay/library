const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { authentication } = require("../models/schema");

// SIGNIN
const sign_in = async (req, res) => {
  try {
    await authentication.create({
      username: req.body.username,
      password: req.body.password,
    });

    res.json({ message: "Account has been created" });
  } catch (error) {
    res.json(error);
  }
};

// LOGIN
const log_in = async (req, res) => {
  const login = await authentication.findOne({
    username: req.body.username,
  });

  if (login !== null) {
    const unHasPass = await bcrypt.compare(req.body.password, login.password);

    if (unHasPass) {
      const serverToken = jwt.sign(
        {
          username: req.body.username,
        },
        "SeCrEt_15728"
      );
      res.json({
        token: serverToken,
        message: "Account authentication successfull",
      });
    } else {
      res.json({ message: "Invalid either username or password" });
    }
  } else {
    res.json({ message: "Username does not exist" });
  }
};

module.exports = { sign_in, log_in };
