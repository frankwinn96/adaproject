var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var tailorController = require("./app/controllers/tailor.js")
var mongoose   = require('mongoose');
mongoose.connect('mongodb://adaproject:adaproject@ds159662.mlab.com:59662/adaproject')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.port || 8080;  

var router = express.Router();             

router.get('/', function(req, res) {
    res.json({ message: 'Its working' });   
});

router.route('/tailors')
.post(tailorController.postTailor)
.get(tailorController.getTailor)
app.use('/', router);

app.listen(port);

console.log('Magic happens on port ' + port);