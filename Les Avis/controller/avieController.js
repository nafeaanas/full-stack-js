
// const { response } = require("../app.js");
const Avie = require("../models/avieModel.js");

  // Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    // console.log(req.body.Avie);
    if (!req.body.Avie) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    // Create a Tutorial
    const avie = {
      avie: req.body.Avie,
    };
  
    // Save Tutorial in the database
    Avie.create(avie)
      .then(data => {
        res.redirect('/Avis');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the avie."
        });
      });
  };
  
//   // Retrieve all Tutorials from the database.
  exports.getAllAvie = async(req, res) => {
  
    const allData = await Avie.findAll({}).then(data => {
      return data
        // return JSON.parse(JSON.stringify(data))
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving avis."
        });
      });
      return allData
  };
  
 // Find a single Tutorial with an id
  exports.findOne = async(req, res) => {
    const id = req.params.id;
    const allData = await Avie.findByPk(id).then(data => {
      return data
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving avis."
        });
      });

      return allData
    };  

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Avie.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "avie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update avie with id=${id}. Maybe avie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Avie with id=" + id
        });
      });

      res.redirect('dashboard/Avis/Avis.ejs')

  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Avie.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
     
          res.redirect("/Avis")
        } else {
          res.send({
            message: `Cannot delete avie with id=${id}. Maybe avie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete avie with id=" + id
        });
      });
  };
  
