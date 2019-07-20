var router = require('express').Router();
var controller = require('./controller/controller.js');
router.get('/', function(req, res){
    res.json({
        status: 'API is Working',
        message: 'Node + Express + MongoDB: Nodemon Server',
    });
});
// users routes
router.route('/users').get(controller.index);
router.route('/users').post(controller.newUser);
router.route('/user/:id').get(controller.view);
// Expose API routes to public
module.exports = router;