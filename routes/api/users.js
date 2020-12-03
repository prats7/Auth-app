const express = require('express');
const router = express.Router();

router.get('/login', (req,res) => res.send('login'));

router.get('/Register', (req,res) => res.send('reg'));

//router.get('/', (req,res) => res.send('hey'));

module.exports = router;