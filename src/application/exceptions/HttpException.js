module.exports = class HttpException extends Error {
    constructor(message, statusCode, data) {
        super(message)
        this.statusCode = statusCode
        if (!data) {
            this.data = { error: message }
        } else {
            this.data = data
        }
    }
}