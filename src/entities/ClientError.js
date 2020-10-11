'use strict'


class ClientError {

    BadRequest(message){
        const msg = 'bad request'
        return Schema({status: 400, error: message || msg, message: msg})
    }

    Unauthorized(message){
        const msg = 'unauthorized'
        return Schema({status: 401, error: message || msg, message: msg})
    }

    PaymentRequired(message){
        const msg = 'payment required'
        return Schema({status: 402, error: message || msg, message: msg})
    }

    Forbidden(message){
        const msg = 'request forbidden'
        return Schema({status: 403, error: message || msg, message: msg})
    }

    NotFound(message){
        const msg = 'not found'
        return Schema({status: 404, error: message || msg, message: msg})
    }

    MethodNotAllowed(message){
        const msg = 'method not allowed'
        return Schema({status: 405, error: message || msg, message: msg})
    }

    NotAcceptable(message){
        const msg = 'request not acceptable'
        return Schema({status: 406, error: message || msg, message: msg})
    }

    ProxyAuthenticationRequired(message){
        const msg = 'proxy authentication required'
        return Schema({status: 407, error: message || msg, message: msg})
    }

    RequestTimeout(message){
        const msg = 'request timeout'
        return Schema({status: 408, error: message || msg, message: msg})
    }

    Conflict(message){
        const msg = 'request could not be processed because of conflict in the current state of the resource'
        return Schema({status: 409, error: message || msg, message: msg})
    }

    Gone(message){
        const msg = ' resource requested is no longer available'
        return Schema({status: 410, error: message || msg, message: msg})
    }

    LengthRequired(message){
        const msg = 'request did not specify the length of its content'
        return Schema({status: 411, error: message || msg, message: msg})
    }

    PreconditionFailed(message){
        const msg = 'precondition failed'
        return Schema({status: 412, error: message || msg, message: msg})
    }

    PayloadTooLarge(message){
        const msg = 'payload is too large'
        return Schema({status: 413, error: message || msg, message: msg})
    }

    URIToLong(message){
        const msg = 'URI is too long'
        return Schema({status: 414, error: message || msg, message: msg})
    
    }

    UnsuportedMediaType(message){
        const msg = 'media type not supported'
        return Schema({status: 415, error: message || msg, message: msg})
    }

    RangeNotSatisfiable(message){
        const msg = 'range not satisfiable'
        return Schema({status: 416, error: message || msg, message: msg})
    }

    ExpectationFailed(message){
        const msg = 'expectation failed'
        return Schema({status: 417, error: message || msg, message: msg})
    }

    Teapot(message){
        const msg = 'teapot'
        return Schema({status: 418, error: message || msg, message: msg})
    }

    MisdirectedRequest(message){
        const msg = 'request was directed at a server that is not able to produce a response'
        return Schema({status: 421, error: message || msg, message: msg})
    }

    UnprocessableEntity(message){
        const msg = 'request was well-formed but was unable to be followed due to semantic errors'
        return Schema({status: 422, error: message || msg, message: msg})
    }

    Locked(message){
        const msg = 'resource that is being accessed is locked'
        return Schema({status: 423, error: message || msg, message: msg})
    }

    FailedDependency(message){
        const msg = 'request failed because it depended on another request that failed'
        return Schema({status: 424, error: message || msg, message: msg})
    }

    TooEarly(message){
        const msg = 'request might be replayed'
        return Schema({status: 425, error: message || msg, message: msg})
    }

    UpgradeRequired(message){
        const msg = 'The client should switch to a different protocol'
        return Schema({status: 426, error: message || msg, message: msg})
    }

    PreconditionRequired(message){
        const msg = 'precondition required'
        return Schema({status: 428, error: message || msg, message: msg})
    }

    TooManyRequests(message){
        const msg = 'too many requests'
        return Schema({status: 429, error: message || msg, message: msg})
    }

    RequestHeaderFieldsTooLarge(message){
        const msg = 'request header fields are too large'
        return Schema({status: 431, error: message || msg, message: msg})
    }

    UnavailableForLegalReasons(message){
        const msg = 'unavailable for leagl reasons'
        return Schema({status: 451, error: message || msg, message: msg})
    }
}

module.exports = ClientError