const { ServerError } = require("../errors");
const router = require("express").Router();
module.exports = router;

router.use((req, res, next) => {
  next(new ServerError(501, `API routes not implemented yet!`));
});
