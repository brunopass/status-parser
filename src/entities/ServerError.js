'use strict'

const { onError } = require("../network/response")
const Schema = require("../schema")

/**
* Server Error: contains most 5xx responses used.
* @param  {[Object]} res: http response object
*/
class ServerError{
    #res
    #options
    constructor(res, options = {}){
        this.#res = res
        this.#options = options
    }
    /**
    * 500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    InternalServerError(message){
        const msg = 'internal server error'
        const payload = Schema({status: 500, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 501 Not implemented: The server either does not recognize the request method, or it lacks the ability to fulfil the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NotImplemented(message){
        const msg = 'request method not recognized'
        const payload = Schema({status: 501, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    BadGateway(message){
        const msg = 'invalid response'
        const payload = Schema({status: 502, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 503 Service Unavailable: The server cannot handle the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    ServiceUnavailable(message){
        const msg = 'service is not available'
        const payload = Schema({status: 503, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 504 Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    GatewayTimeout(message){
        const msg = 'gateway timeout'
        const payload = Schema({status: 504, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 505 HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    HTTPVersionNotSupported(message){
        const msg = 'http protocol version not supported'
        const payload = Schema({status: 505, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 506 Variant Also Negotiates: Transparent content negotiation for the request results in a circular reference.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    VariantAlsoNegotiates(message){
        const msg = 'circular reference'
        const payload = Schema({status: 506, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 507 Insufficient Storage: The server is unable to store the representation needed to complete the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    InsufficientStorage(message){
        const msg = 'insufficient storage'
        const payload = Schema({status: 507, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 508 Loop Detected: The server detected an infinite loop while processing the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    LoopDetected(message){
        const msg = 'infinite loop detected'
        const payload = Schema({status: 508, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 510 Not Extended: Further extensions to the request are required for the server to fulfil it.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NotExtended(message){
        const msg = 'further extensions required'
        const payload = Schema({status: 510, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }

    /**
    * 511 Network Authentication Required: The client needs to authenticate to gain network access.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NetworkAuthenticationRequired(message){
        const msg = 'client needs to authenticate to gain network access'
        const payload = Schema({status: 511, error: message || msg, message: msg})
        if(this.#res){
            onError(this.#res,this.#options, payload)
        }
        return payload
    }
}

module.exports = ServerError