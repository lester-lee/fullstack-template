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
  try {
    const { username, password } = req.body;
    const foundUsername = await prisma.store.findFirst({
      where: { username: username },
    });

    if (
      foundUsername &&
      (await bcrypt.compare(password, foundUsername.password))
    ) {
      return res.json({
        token: jwt.sign({ id: foundUsername.id }, process.env.JWT),
        // Maybe unecessary
        storeId: foundUsername.id,
      });
    }
    res.status(401).send("incorrect username or password");
  } catch (err) {
    next(err);
  }
});

/** Sends store details (username, store id) */
router.get("/", async (req, res, next) => {
  try {
    const payload = jwt.verify(req.headers.authorization, process.env.JWT);
    const store = await prisma.store.findUnique({
      where: {
        id: payload.id,
      },
    });
    if (store) {
      return res.json(store);
    }
  } catch (err) {
    next(err);
  }
});
