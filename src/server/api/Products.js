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

// Delete single product router
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const deletedProduct = await prisma.product.delete({ where: { id } });

    if (!deletedProduct) {
      return next(new ServerError("Product not found", 404));
    }

    return res.json({ message: "Product successfully deleted" });
  } catch (err) {
    next(err);
  }
});
