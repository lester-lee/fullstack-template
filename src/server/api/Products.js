//const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** GETS all products */
router.get("/", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

/** GETS details for a single product */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const product = await prisma.product.findUnique({ where: { id } });

    res.json(product);
  } catch (err) {
    next(err);
  }
});

/**Adds a new product to user's store, using storeId */
router.post("/store", async (req, res, next) => {
  try {
    const { name, price, imgUrl, category, storeId } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: +price,
        imgUrl: imgUrl,
        category: category,
        storeId: +storeId,
      },
    });
    res.json(newProduct);
  } catch (err) {
    next(err);
  }
});

/** GETS all products from with same storeId  */
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
