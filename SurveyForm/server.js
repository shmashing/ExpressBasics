var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+"/views");
app.set("view engine", "ejs");

app.post('/form_return', function(request, response) {
  console.log(request.body)
  response.render('results', {results: request.body});
})

app.get('/', function(request, response) {
  response.render('index');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
