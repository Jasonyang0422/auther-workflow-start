'use strict';

var router = require('express').Router(),
	morgan = require('morgan'),
	User   = require('../api/users/user.model.js');

router.use(morgan(':method :url :status :response-time ms - :res[content-length]'));


router.post('/login', function (req, res, next) {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    .exec()
    .then(function (user) {
        if (!user) {
        	console.log('no user');
            res.sendStatus(401);
        } else {
        	console.log('have user');
            req.session.userId = user._id;
            res.sendStatus(200);
        }
    })
    .then(null, next);
});

router.post('/signup', function(req, res, next){
	User.create(req.body)
		.then(function(user){
			req.session.userId = user._id;
			res.sendStatus(200);
		})
		.then(null, next);
});

router.delete('/logout', function(req, res, next){
	delete req.session.userId;
	res.sendStatus(200);
});


module.exports = router;














