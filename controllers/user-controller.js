const { User, Thought } = require("../models");

const userController = {
  getAllUsers: (req, res) => {
    User.find()
      .select("-__v")
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  getSingleUser: (req, res) => {
    User.findOne({ _id: req.params.userId })
      .populate("friends")
      .populate("thoughts")
      .select("-__v")
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "No User Found" });
        }
        return res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  makeUser: (req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({
        message: "Missing username and/or email",
      });
    }
    User.create({ username, email })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  changeUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "No User Found" });
        }
        return res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  removeUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.userId }).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "No User Found" });
      }
      return Thought.deleteMany({ _id: { $in: data.thoughts } });
    });
  },
  makeFriend: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No User Found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  removeFriend: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No User Found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
};

module.exports = userController;
