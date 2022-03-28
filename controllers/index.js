const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Bring in all the routes defined elsewhere
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// Default route for any requests that don't match a defined route
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;