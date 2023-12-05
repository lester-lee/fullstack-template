const prisma = require("../../prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
module.exports = router;

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const checkStoreAvailable = await prisma.store.findUnique({
      where: {
        username: username,
      },
    });

    if (checkStoreAvailable) {
      return res.status(400).send("A store with that name already exists");
    }

    const newStore = await prisma.store.create({
      data: { username, password },
    });
    res.json(newStore);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const foundUsername = await prisma.store.findFirst({
      where: { username: username },
    });

    if (
      foundUsername &&
      (await bcrypt.compare(password, foundUsername.password))
    ) {
      if (password === foundUsername.password) {
        return res.json({
          token: jwt.sign({ id: foundUsername.id }, process.env.JWT),
        });
      }
    }
    res.status(401).send("incorrect username or password");
  } catch (err) {
    next(err);
  }
});
