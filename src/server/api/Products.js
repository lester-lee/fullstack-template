//const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Sends all porducts */
router.get("/", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

/** Change for a single product */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const product = await prisma.product.findUnique({ where: { id } });

    res.json(product);
  } catch (err) {
    next(err);
  }
});
