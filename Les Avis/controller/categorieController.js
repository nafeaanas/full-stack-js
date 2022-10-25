// const { response } = require("../app.js");
const Category = require("../models/categorieModel");

  // Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    // Create a Tutorial
    const category = {
      title: req.body.name,
      
    };
  
    // Save Tutorial in the database
    Category.create(category)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the article."
        });
      });
  };
  
//   // Retrieve all Tutorials from the database.
  exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Category.findAll({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articles."
        });
      });
  };
  
 // Find a single Tutorial with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Category.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find article with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving article with id=" + id
        });
      });
  };
  

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Category.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "article was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update article with id=${id}. Maybe article was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating article with id=" + id
        });
      });
  };
  
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "article was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete article with id=${id}. Maybe article was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete article with id=" + id
        });
      });
  };
  
