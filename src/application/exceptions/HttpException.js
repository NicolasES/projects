module.exports = class HttpException extends Error {
    constructor(message, statusCode, data) {
        super(message)
        this.statusCode = statusCode
        this.data = data
    }
}