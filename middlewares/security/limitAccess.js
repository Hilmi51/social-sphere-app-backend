const limit = require('express-rate-limit');
const limitAccess = (options) => limit(options);
module.exports = limitAccess;