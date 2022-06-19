const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {});
});
router.post("/products", controllers.createProduct);
router.get("/products", controllers.getAllProducts);
router.get("/products/:id", controllers.getProductById);
router.put("/products/:id", controllers.updateProduct);
router.delete("/products/:id", controllers.deleteProduct);

module.exports = router;
