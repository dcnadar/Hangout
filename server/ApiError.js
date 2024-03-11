
class ApiError extends Error {
    constructor(
        statusCode,
        message,
        errors = [],
        stack = "",
        data=null
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.data=data
        this.errors = errors

       if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}