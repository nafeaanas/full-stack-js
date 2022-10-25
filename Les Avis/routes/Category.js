
    const category = require("../controller/categorieController.js");
    const router = require("express").Router();

  
  router.post("/", category.create);

  router.get("/getCategory", category.findAll);

  router.get("/:id", category.findOne);

  router.put("/:id", category.update);

  router.delete("/:id", category.delete);

  

  // app.use('/api/articles', router);
  module.exports = router;
