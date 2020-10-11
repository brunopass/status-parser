'use strict'

class ServerError{
    
    /**
    * 500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    InternalServerError(message){
        const msg = 'internal server error'
        return Schema({status: 500, error: message || msg, message: msg})
    }

    NotImplemented(message){
        const msg = 'request method not recognized'
        return Schema({status: 501, error: message || msg, message: msg})
    }

    BadGateway(message){
        const msg = 'invalid response'
        return Schema({status: 502, error: message || msg, message: msg})
    }

    ServiceUnavailable(message){
        const msg = 'service is not available'
        return Schema({status: 503, error: message || msg, message: msg})
    }

    GatewayTimeout(message){
        const msg = 'gateway timeout'
        return Schema({status: 504, error: message || msg, message: msg})
    }

    HTTPVersionNotSupported(message){
        const msg = 'http protocol version not supported'
        return Schema({status: 505, error: message || msg, message: msg})
    }

    VariantAlsoNegotiates(message){
        const msg = 'http protocol version not supported'
        return Schema({status: 506, error: message || msg, message: msg})
    }

    InsufficientStorage(message){
        const msg = 'insufficient storage'
        return Schema({status: 507, error: message || msg, message: msg})
    }

    LoopDetected(message){
        const msg = 'infinite loop detected'
        return Schema({status: 508, error: message || msg, message: msg})
    }

    NotExtended(message){
        const msg = 'further extensions required'
        return Schema({status: 510, error: message || msg, message: msg})
    }

    NetworkAuthenticationRequired(message){
        const msg = 'client needs to authenticate to gain network access'
        return Schema({status: 511, error: message || msg, message: msg})
    }

}