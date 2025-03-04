const CustomError = require("../../helpers/error/customError.js");
const errorHandler = (err, req, res) => {
    let customError = new CustomError(err.message, err.status);
    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpected Syntax", 400);
    }
    if (err.name === "ValidationError") {
        customError = new CustomError(err.message, 400);
    }
    if (err.name === "CastError") {
        customError = new CustomError("Please provide a valid input", 400);
    }
    if (err.code === 11000) {
        customError = new CustomError("Duplicate Key Found : Please check your info", 400);
    }
    console.log(customError);
    return res.status(customError.status || 500).json({
        success: false,
        message: customError.message || "Internal Server Error"
    });
}

module.exports = errorHandler;