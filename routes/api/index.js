const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

/**
 * Return all users
 * GET /api/users
 */
router.get('/users', getAllUsers);

/**
 * Return single user from database.
 * GET /api/users/_id
 */
router.get('/users/:id', getSingleUser);

/**
 * Create new User
 * POST /api/users
 */
router.post('/users', createUser);

/**
 * Update a user
 * PUT /api/users/_id
 */
router.put('/users/:id', updateUser);

/**
 * Remove a user from the database
 * DELETE /api/users/_id
 */
router.delete('/users/:id', deleteUser);

module.exports = router;
