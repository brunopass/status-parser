'use strict'

class ServerError{
    
    /**
    * 500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    InternalServerError(message){
        const msg = 'internal server error'
        return Schema({status: 500, error: message || msg, message: msg})
    }

    /**
    * 501 Not implemented: The server either does not recognize the request method, or it lacks the ability to fulfil the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NotImplemented(message){
        const msg = 'request method not recognized'
        return Schema({status: 501, error: message || msg, message: msg})
    }

    /**
    * 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    BadGateway(message){
        const msg = 'invalid response'
        return Schema({status: 502, error: message || msg, message: msg})
    }

    /**
    * 503 Service Unavailable: The server cannot handle the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    ServiceUnavailable(message){
        const msg = 'service is not available'
        return Schema({status: 503, error: message || msg, message: msg})
    }

    /**
    * 504 Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    GatewayTimeout(message){
        const msg = 'gateway timeout'
        return Schema({status: 504, error: message || msg, message: msg})
    }

    /**
    * 505 HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    HTTPVersionNotSupported(message){
        const msg = 'http protocol version not supported'
        return Schema({status: 505, error: message || msg, message: msg})
    }

    /**
    * 506 Variant Also Negotiates: Transparent content negotiation for the request results in a circular reference.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    VariantAlsoNegotiates(message){
        const msg = 'http protocol version not supported'
        return Schema({status: 506, error: message || msg, message: msg})
    }

    /**
    * 507 Insufficient Storage: The server is unable to store the representation needed to complete the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    InsufficientStorage(message){
        const msg = 'insufficient storage'
        return Schema({status: 507, error: message || msg, message: msg})
    }

    /**
    * 508 Loop Detected: The server detected an infinite loop while processing the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    LoopDetected(message){
        const msg = 'infinite loop detected'
        return Schema({status: 508, error: message || msg, message: msg})
    }

    /**
    * 510 Not Extended: Further extensions to the request are required for the server to fulfil it.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NotExtended(message){
        const msg = 'further extensions required'
        return Schema({status: 510, error: message || msg, message: msg})
    }

    /**
    * 511 Network Authentication Required: The client needs to authenticate to gain network access.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, error: string, message: string}
    */
    NetworkAuthenticationRequired(message){
        const msg = 'client needs to authenticate to gain network access'
        return Schema({status: 511, error: message || msg, message: msg})
    }
}