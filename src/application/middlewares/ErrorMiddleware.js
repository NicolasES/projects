module.exports = function(err, req, res, next) {
    err.statusCode = err.statusCode || 500

    console.log(err)

    let response = {
        message: err.message,
        statusCode: err.statusCode,
        data: err.data
    }
    
    res.status(err.statusCode).json(response)
}