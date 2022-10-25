const avie = require('../controller/avieController.js');
const router = require("express").Router();
const Avie = require("../models/avieModel")
  
    
router.post("/addAvie", avie.create);

router.get("/getAllAvie", avie.getAllAvie);

router.get("/:id", avie.findOne);

router.get("/delete/:id",avie.delete);

router.post("/:id", avie.update);

// router.get("/updateAvie/:id", avie.findOne);


router.get("/delete/:id",async(req,res)=>{
    const delt= await  avie.delete(req,res)
    res.render('dashboard/Avis/Avis.ejs')
})


 router.get('/Avis', async (req, res) => {
    const test = await avie.getAllAvie(req, res)
     res.render('dashboard/Avis/Avis.ejs',
       {
        avie: test
      });
  })


 
 router.get('/addAvie', (req, res) => {
    res.render('dashboard/Avis/addAvies.ejs')
})
// router.get('/addAvie', (req, res) => {
//     res.render('dashboard/Avis/addAvies.ejs')
// })

router.get('/getAvi/:id', async (req, res) => {
    const data = await avie.findOne(req, res)
     res.render('dashboard/Avis/updateAvies.ejs',
       {
        avie:data
      });
})


router.post('/update/:id', async (req, res) => {
    const data = await avie.update(req, res)
    res.render('dashboard/Avis/Avis.ejs')
 
})




module.exports = router;