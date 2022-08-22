const { User, Thought } = require("../models");

const thoughtController = {
  getAllThoughts: (req, res) => {
    Thought.find()
      .select("-__v")
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  getSingleThought: (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
      // .populate("friends")
      // .populate("thoughts")
      .select("-__v")
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Thought not found" });
        }
        return res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  createThought: (req, res) => {
    Thought.create(req.body)
      .then((data) => {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $push: { thoughts: data._id } },
          { new: true, runValidators: true }
        );
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  updateThought: (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Thought not found" });
        }
        return res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  deleteThought: (req, res) => {
    Thought.findOneAndDelete({ _id: req.params.thoughtId }).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Thought not found" });
      }
      return res.json({ message: "Deleted thought" });
    });
  },
  createReaction: (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Thought not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
  // TODO:  not working
  deleteReaction: (req, res) => {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Thought not found" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        return res.sendStatus(500);
      });
  },
};

module.exports = thoughtController;
