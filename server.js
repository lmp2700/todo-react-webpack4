const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const PORT = 8004; // backend server


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/src')));

// CORS 
const whitelist = ['http://localhost:8004','http://localhost:8005', 'http://localhost:8082'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// middlware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// database
const data = {
  todos: require('./src/data/data')
};

// controllers
const controllers = {
  todos: require('./src/controllers/controller')(data.todos)
};

// ToDo API routes
app.get('/api/todos', cors(corsOptionsDelegate), controllers.todos.getAll, function(req, res, next){
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
});
app.get('/api/todos/:id', cors(corsOptionsDelegate), controllers.todos.getOne, function(req, res, next){
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
});
app.post('/api/todos', cors(corsOptionsDelegate), controllers.todos.create, function(req, res, next){
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
});
app.put('/api/todos/:id', cors(corsOptionsDelegate), controllers.todos.update, function(req, res, next){
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
});
app.delete('/api/todos/:id', cors(corsOptionsDelegate), controllers.todos.delete, function(req, res, next){
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
});

app.get('/', (req, res) => {
    res.render('index.js')
})

// Backend Server
app.listen(PORT, function() {
  console.log('Server started on port ' + PORT);
});