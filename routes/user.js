var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Company = require("../models/country");
/* GET users list. */

router.get("/", async (req, res) => {
  try {
    const userList = await Company.find();
    res.json(userList);
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Create a new user
router.post("/create", async (req, res) => {
  const user = new User({
    name: req.body.name,
    designation: req.body.designation,
    organization: req.body.organization,
  });
  try {
    const saveUser = await user.save();
    res.json(saveUser);
  } catch (err) {
    res.send(err);
  }
});

// Update a user

router.patch("/update/:userId", async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          designation: req.body.designation,
          organization: req.body.organization,
        },
      }
    );
    res.json(updateUser);
  } catch (err) {
    res.send(err);
  }
});

// Get a particular user
router.get("/getUserById/:userId", async (req, res) => {
  try {
    const getUserById = await User.findById(req.params.userId);
    res.json(getUserById);
  } catch (err) {
    res.send(err);
  }
});

// Delete a user

router.delete("/delete/:userId", async (req, res) => {
  try {
    const deleteUser = await User.remove({ _id: req.params.userId });
    res.json(deleteUser);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
