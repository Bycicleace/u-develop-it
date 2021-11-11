const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes.js'));
router.use(require('./partyRoutes.js'));

module.exports = router;