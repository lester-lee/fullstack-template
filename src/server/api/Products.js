//const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** Sends all products */
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

/**Add a new product with store id */
router.post("/store/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { name, price, imgUrl, category } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: +price,
        imgUrl: imgUrl,
        category: category,
        storeId: id,
      },
    });
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
});

/** Sends all products from a specific store ID  */
router.get("/store/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const products = await prisma.product.findMany({
      where: {
        storeId: id,
      },
    });
    return res.json(products);
  } catch (err) {
    next(err);
  }
});
