const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

//** user/getdata */ 
router.get('/', controller.getDataUser);
router.post('/search', controller.searchNews)
module.exports = router;  