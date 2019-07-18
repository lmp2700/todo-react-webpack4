const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const PORT = 8004; // backend server


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/src')));

// CORS headers
app.use(function(req, res, next) {
  const whitelist = [
    'http://localhost:8005', 'http://localhost:8082',
  ];

  const origin = req.headers.origin;

  if (whitelist.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
  return next();
});

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
app.get('/api/todos', cors(corsOptions), controllers.todos.getAll);
app.get('/api/todos/:id', cors(corsOptions), controllers.todos.getOne);
app.post('/api/todos', cors(corsOptions), controllers.todos.create);
app.put('/api/todos/:id', cors(corsOptions), controllers.todos.update);
app.delete('/api/todos/:id', cors(corsOptions), controllers.todos.delete);

app.get('/', (req, res) => {
    res.render('index.js')
})

// Backend Server
app.listen(PORT, function() {
  console.log('Server started on port ' + PORT);
});