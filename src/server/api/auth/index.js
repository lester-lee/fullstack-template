const prisma = require("../../prisma");
const jwt = require("./jwt");
const bcrypt = require("bcrypt");
const router = require("express").Router();
module.exports = router;

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newStore = await prisma.store.create({
      data: { username, password },
    });
    res.json(newStore);
  } catch (err) {
    next(err);
  }
});
