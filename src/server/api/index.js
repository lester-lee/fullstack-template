const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.use("/products", require("./Products"));

router.use("/auth", require("./auth"));
