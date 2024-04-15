const status = require('./httpResStatusCodes')

const errMsg = {
    closet: "Closet is invalid (must be INF-{Room}-ARM{closet number}, example:'INF-B01-ARM1')",
    room: "Room is invalid (Correct example: 'A01', 'B11')",
    closetNotFound: closetName => `${closetName} does not exist in database`,
    expectedNbrOnReq: path => `Expected number (${path}/{number})`
}

/**
 * 
 * @param {Number} statusCode - HTTP Response status code
 * @param {*} msg - Error message
 */
const throwError = (statusCode, msg) => {
    err = new Error(msg)
    err.statusCode = statusCode
    throw err
}
/**
 * 
 * @param {any} value - Value to tests
 * @param {Number} statusCode - HTTP Response status code
 * @param {String} msg - Error message
 * @param {Function} condition - Callback on value, throws error if True is returned
 */
const throwErrorWhen = (value, statusCode, msg, condition) => {
    if(condition(value)) throwError(statusCode, msg)
}
/**
 * 
 * @param {Error} err
 * @param {Response} res 
 */
const respondWithErr = (err, res) => {
    if(!err.statusCode) err.statusCode = status.STATUS_INTERNALERR
    console.log(typeof(err.message))
    console.log(err.message)
    res.status(err.statusCode).json({error: err.message})
}

module.exports = { 
    throwError,
    throwErrorWhen,
    respondWithErr, 
    errMsg 
}