const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  makeUser,
  changeUser,
  removeUser,
  makeFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Route root:  /api/users
router.get("/", getAllUsers);
router.get("/:userId", getSingleUser);
router.post("/", makeUser);
router.put("/:userId", changeUser);
router.delete("/:userId", removeUser);
router.post("/:userId/friends/:friendId", makeFriend);
router.delete("/:userId/friends/:friendId", removeFriend);

module.exports = router;
