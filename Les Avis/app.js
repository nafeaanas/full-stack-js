const express = require('express');
const sequelize = require('./models/');



const app = express()

const Router = require('./routes/index.js')
const Article = require('./routes/Article.js')
const Category = require('./routes/Category.js')
const Commentaire = require('./routes/Commentaire.js')
const Avie = require('./routes/Avie.js')

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
const port = 3000

app.set('view engine', 'ejs');

app.use('/',Router)
app.use('/',Article)
app.use('/api/category',Category)
app.use('/api/commentaire',Commentaire)
app.use('',Avie)


app.listen(port, () => {
  console.log(`server has started ${port}`)
})


module.exports = app;