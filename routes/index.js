var express = require('express');
var router = express.Router();

const controllers = require('../controller/controller')

/* GET home page. */
router.get('/', controllers.list);

router.get('/administration', (req, res) => {
    res.render('admin')
})

module.exports = router;
