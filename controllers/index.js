const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

<<<<<<< HEAD:routes/index.js
=======
router.use('/', homeRoutes);
>>>>>>> feature/homepage-view:controllers/index.js
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
