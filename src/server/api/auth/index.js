const prisma = require("../../prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
module.exports = router;

// Establishes backend endpoints for REGISTER, LOGIN and GET STORE DETAILS

//// REGISTER
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    //check if store exists
    const checkStoreAvailable = await prisma.store.findUnique({
      where: {
        username: username,
      },
    });
    // if it exists, send error
    if (checkStoreAvailable) {
      return res.status(400).send("A store with that name already exists");
    }
    // if username doesn't exist, create a new one
    const newStore = await prisma.store.create({
      data: { username, password },
    });
    res.json(newStore);
  } catch (err) {
    next(err);
  }
});

// LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // Find username
    const foundUsername = await prisma.store.findFirst({
      where: { username: username },
    });

    // If found, compare password with BCRYPT
    if (
      foundUsername &&
      (await bcrypt.compare(password, foundUsername.password))
    ) {
      // If password matched, use JWT to return a token, using the storeId
      return res.json({
        token: jwt.sign({ id: foundUsername.id }, process.env.JWT),
      });
    }
    res.status(401).send("incorrect username or password");
  } catch (err) {
    next(err);
  }
});

// GETS STORE DETAILS
router.get("/", async (req, res, next) => {
  try {
    // Declare and verify payload from AUTHORIZATION HEADER
    const payload = jwt.verify(req.headers.authorization, process.env.JWT);
    const store = await prisma.store.findUnique({
      where: {
        id: payload.id,
      },
    });
    // If store found, return STORE DETAILS
    if (store) {
      return res.json(store);
    }
  } catch (err) {
    next(err);
  }
});
