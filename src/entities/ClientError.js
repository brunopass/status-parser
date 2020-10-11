'use strict'

const { onError } = require("../network/response")
const Schema = require("../schema")

/**
* Client Error: contains most 4xx responses used.
* @param  {[Object]} res: http response object
*/
class ClientError {
    #res
    constructor(res){
        this.#res = res
    }
    /**
    * 400 Bad Request: The server cannot or will not process the request due to an apparent client error.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    BadRequest(message){
        const msg = 'bad request'
        const payload = Schema({status: 400, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 401 Unauthorized: Authentication is required.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    Unauthorized(message){
        const msg = 'unauthorized'
        const payload = Schema({status: 401, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 402 Payment Required: Payment is required or has not be successful.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    PaymentRequired(message){
        const msg = 'payment required'
        const payload = Schema({status: 402, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 403 Forbidden: The server is refusing action.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    Forbidden(message){
        const msg = 'request forbidden'
        const payload = Schema({status: 403, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 404 Not Found: Resource not found.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NotFound(message){
        const msg = 'not found'
        const payload = Schema({status: 404, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 405 Method Not Allowed: Request method is not supported for the requested resource.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    MethodNotAllowed(message){
        const msg = 'method not allowed'
        const payload = Schema({status: 405, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 406 Not Acceptable: The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NotAcceptable(message){
        const msg = 'request not acceptable'
        const payload = Schema({status: 406, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 407 Proxy Authentication Required: The client must first authenticate itself with the proxy.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    ProxyAuthenticationRequired(message){
        const msg = 'proxy authentication required'
        const payload = Schema({status: 407, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 408 Request Timeout: The server timed out waiting for the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    RequestTimeout(message){
        const msg = 'request timeout'
        const payload = Schema({status: 408, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 409 Conflict: The request could not be processed because of conflict in the current state of the resource.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    Conflict(message){
        const msg = 'request could not be processed because of conflict in the current state of the resource'
        const payload = Schema({status: 409, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 410 Gone: The resource requested is no longer available and will not be available again.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    Gone(message){
        const msg = 'resource requested is no longer available'
        const payload = Schema({status: 410, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 411 Length Required: The request did not specify the length of its content.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    LengthRequired(message){
        const msg = 'request did not specify the length of its content'
        const payload = Schema({status: 411, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 412 Precondition Failed: The server does not meet one of the preconditions that the requester put on the request header fields.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    PreconditionFailed(message){
        const msg = 'precondition failed'
        const payload = Schema({status: 412, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 413 Payload Too Large: The request is larger than the server is willing or able to process.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    PayloadTooLarge(message){
        const msg = 'payload is too large'
        const payload = Schema({status: 413, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 414 URI Too Long: The URI provided was too long for the server to process.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    URITooLong(message){
        const msg = 'URI is too long'
        const payload = Schema({status: 414, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    
    }

    /**
    * 415 Unsupported Media Type: The request entity has a media type which the server or resource does not support.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    UnsuportedMediaType(message){
        const msg = 'media type not supported'
        const payload = Schema({status: 415, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 416 Range Not Satisfiable: The client has asked for a portion of the file, but the server cannot supply that portion.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    RangeNotSatisfiable(message){
        const msg = 'range not satisfiable'
        const payload = Schema({status: 416, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 417 Expectation Failed: The server cannot meet the requirements of the Expect request-header field.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    ExpectationFailed(message){
        const msg = 'expectation failed'
        const payload = Schema({status: 417, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 418 Teapot: Teapot requested to brew coffee.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    Teapot(message){
        const msg = 'teapot'
        const payload = Schema({status: 418, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 421 Misdirected Request: The request was directed at a server that is not able to produce a response.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    MisdirectedRequest(message){
        const msg = 'request was directed at a server that is not able to produce a response'
        const payload = Schema({status: 421, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 422 Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    UnprocessableEntity(message){
        const msg = 'request was well-formed but was unable to be followed due to semantic errors'
        const payload = Schema({status: 422, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 423 Locked: The resource that is being accessed is locked.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    Locked(message){
        const msg = 'resource that is being accessed is locked'
        const payload = Schema({status: 423, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 424 Failed Dependency: The request failed because it depended on another request and that request failed.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    FailedDependency(message){
        const msg = 'request failed because it depended on another request that failed'
        const payload = Schema({status: 424, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 425 Too Early: Indicates that the server is unwilling to risk processing a request that might be replayed.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    TooEarly(message){
        const msg = 'request might be replayed'
        const payload = Schema({status: 425, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 426 Upgrade Required: The client should switch to a different protocol.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    UpgradeRequired(message){
        const msg = 'switch protocol'
        const payload = Schema({status: 426, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 428 Precondition Required: The origin server requires the request to be conditional.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    PreconditionRequired(message){
        const msg = 'precondition required'
        const payload = Schema({status: 428, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 429 Too Many Requests: The user has sent too many requests in a given amount of time.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    TooManyRequests(message){
        const msg = 'too many requests'
        const payload = Schema({status: 429, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 431 Request Header Fields Too Large: The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    RequestHeaderFieldsTooLarge(message){
        const msg = 'request header fields are too large'
        const payload = Schema({status: 431, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }

    /**
    * 451 Unavailable For Legal Reasons: A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    UnavailableForLegalReasons(message){
        const msg = 'unavailable for leagl reasons'
        const payload = Schema({status: 451, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res, payload)
        }
        return payload
    }
}

module.exports = ClientError