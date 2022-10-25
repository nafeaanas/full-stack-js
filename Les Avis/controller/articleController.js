// const { response } = require("../app.js");
const Article = require("../models/articleModel.js");

  // Create and Save a new articles
exports.create =  (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const article = {
      title: req.body.title,
      description: req.body.description,
      centenu: req.body.centenu
    };
  
    Article.create(article)
      .then(data => {
        res.redirect('/articles');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the article."
        });
      });
  };
  

  exports.getAllArticles = async (req, res) => {
    const allData = await Article.findAll({}).then(data => {
      return data
        // return JSON.parse(JSON.stringify(data))
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articles."
        });
      });

      return allData
  };


  exports.findOne =  async (req, res) => {
    const id = req.params.id;
    const allData = await Article.findByPk(id).then(data => {
      return data
      // res.send(data)
        // return JSON.parse(JSON.stringify(data))
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving articles."
        });
      });

      return allData


    // const id = req.params.id;
    // const getArticle = await Article.findByPk(id)
    //   .then(data => {
    //     if (data) {
    //       return data;
    //     } else {
    //       res.status(404).send({
    //         message: `Cannot find article with id=${id}.`
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Error retrieving article with id=" + id
    //     });
    //   });
    //   return getArticle;
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Article.update(req.body, {
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
  
    Article.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          // res.send({
          //   message: "article was deleted successfully!"
          // });
          res.redirect("/articles")
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
  
