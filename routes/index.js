let express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/contato',IndexController.viewContato);
router.get('/confirmarContato',IndexController.confirmarContato);




module.exports = router;

