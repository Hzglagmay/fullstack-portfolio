
const express = require('express');
const path = require('path');
const { site, nav, projects } = require('./mymodule');

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// globals so includes like partials/foot.ejs always have 'site' + 'nav'
app.use((req,res,next)=>{
  res.locals.site = site;
  res.locals.nav = nav;
  res.locals.request = req;
  next();
});

app.get('/', (req, res) => {
  res.render('pages/home', { projects });
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/projects', (req, res) => {
  res.render('pages/projects', { projects });
});

app.get('/projects/:slug', (req, res) => {
  const item = projects.find(p => p.slug === req.params.slug);
  if(!item){ return res.status(404).render('pages/404'); }
  res.render('pages/project-detail', { item });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.use((req,res)=>res.status(404).render('pages/404'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Portfolio running on http://localhost:${port}`));
