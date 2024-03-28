const jwt = require('jsonwebtoken');
const errorWrapper = require('../../helpers/error/errorWrapper.js');
const User = require('../../models/user.model.js');
const CustomError = require('../../helpers/error/customError.js');

const getAccessTokenFromHeader = (req) => {
    const authorization = req.headers.authorization;
    let accessToken;
    accessToken = authorization.split(" ")[1];
    return accessToken;
}

const isTokenIncluded = (req) => {
    return req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
}

const getAccessToRoute = errorWrapper(async (req, res, next) => {
    if (!isTokenIncluded(req)) {
        return next(new CustomError('You are not authorized to access this page', 403));
    }

    const accessToken = getAccessTokenFromHeader(req);

    jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decodedToken) => {

        if (err) {
            return next(new CustomError("You are not authorized to access this page", 401));
        }
        req.user = {
            id: decodedToken.id,
            name: decodedToken.name
        };
        next();
    });
});

const getAdminAccess = errorWrapper(async (req, res, next) => {
    const user = await User.findByPk(req.user.id);

    if (user.role !== "admin") {
        return next(new CustomError("Only admins can access this route", 403));
    }

    return next();
});


module.exports = {
    getAccessToRoute,
    getAdminAccess
}
