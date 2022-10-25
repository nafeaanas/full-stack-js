const commentair = require('../controller/commentairController.js');

const router = require("express").Router();
  
    
router.post("/", commentair.create);

router.get("/", commentair.findAll);

router.get("/:id", commentair.findOne);

router.put("/:id", commentair.update);

router.delete("/:id", commentair.delete);



// app.use('/api/articles', router);
module.exports = router;