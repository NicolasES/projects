module.exports = function(err, req, res, next) {
    let response = {
        message: err.message,
        statusCode: err.statusCode,
        data: err.data
    }
    
    res.status(err.statusCode).json(response)
}