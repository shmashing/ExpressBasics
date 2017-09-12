var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+"/views");
app.set("view engine", "ejs");

app.post('/users', function(request, response) {
  var user_array = [
    {name: "Kyle", number: 1},
    {name: "Jared", number: 2},
    {name: "Phil", number: 3}
  ]

  console.log(request.body);
  response.redirect('/');
})
// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.render('index');
})

// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
