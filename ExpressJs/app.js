const express = require('express');

// express app
const app = express();

//register a view engine 
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000 , ()=>{
  console.log('the server is running on port : 3000')
});

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>contact us page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});


app.get('/services', (req, res) => {
  // res.send('<p>services page</p>');
  res.sendFile('./views/services.html', { root: __dirname });

// 404 page
app.use('/*',(req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
})})
