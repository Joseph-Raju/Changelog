const express=require('express');

const router =express.Router();

router.get( '/',(req, res, next) => {
            res.render('login', {
            pageTitle: 'login1',
            path: '/login ',
         
            });
        });

exports.routes =router;