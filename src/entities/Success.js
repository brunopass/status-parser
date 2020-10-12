'use strict'

const { onSuccess } = require("../network/response")
const Schema = require("../schema")

/**
* Success: contains most 2xx responses used.
* @param  {[Object]} res: http response object
*/
class Success{
    #res
    constructor(res){
        this.#res = res
    }
    /**
    * 200 OK: Standard response for successful HTTP requests.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    OK(message){
        const msg = 'successful request'
        const payload = Schema({status: 200, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 201 Created: The request has been fulfilled, resulting in the creation of a new resource.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    Created(message){
        const msg = 'resource created'
        const payload = Schema({status: 201, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 202 Accepted: The request has been accepted for processing, but the processing has not been completed.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    Accepted(message){
        const msg = 'request accepted'
        const payload = Schema({status: 202, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 203 Non Authoritative Information: The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    NonAuthoritativeInformation(message){
        const msg = 'modified origin response'
        const payload = Schema({status: 203, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 204 No Content: The server successfully processed the request, and is not returning any content.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    NoContent(){
        const msg = 'successfully request with no content returned'
        const payload = Schema({status: 204, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 205 Reset Content: The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    ResetContent(message){
        const msg = 'reset content'
        const payload = Schema({status: 205, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 206 Partial Content: The server is delivering only part of the resource due to a range header sent by the client.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    PartialContent(message){
        const msg = 'returned only part of the resources'
        const payload = Schema({status: 206, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    } 
    
    /**
    * 207 Multi Status: The message body that follows is by default an XML message and can contain a number of separate response codes.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    MultiStatus(message){
        const msg = 'multiple status'
        const payload = Schema({status: 207, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 208 Already Reported: The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    AlreadyReported(message){
        const msg = 'already reported'
        const payload = Schema({status: 208, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }

    /**
    * 226 IM Used: The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    IMUsed(message){
        const msg = 'request for the resource fulfilled'
        const payload = Schema({status: 226, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, payload)
        }
        return payload
    }
}

module.exports = Success