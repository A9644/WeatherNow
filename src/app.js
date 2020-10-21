const express = require('express');
const path = require('path');
const app = express();
const port =19000;
const spath = path.join(__dirname, '../public')
const hbs = require('hbs');
const ppath = path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.use(express.static(spath))
app.get('', (req, res) => {
      res.render('index')
})
app.get('/about', (req, res) => {
      res.render('about')
})

app.get('/weather', (req, res) => {
      res.render('weather')
})

app.get('*', (req, res) => {
      res.render('404', {
             errormsg:"ooopss bro not found"
       })
})

app.listen(port, () => {
      console.log("server started brosss");
})