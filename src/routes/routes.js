const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('home/home');
});

router.get('/accesorios', async (req, res) => {
    res.render('sections/accessories');
});

module.exports = router;