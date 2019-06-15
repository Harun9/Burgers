
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

var port = process.env.PORT || 8080;
app.listen(port);
