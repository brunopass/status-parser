'use strict'

const { onSuccess } = require("../network/response")
const Schema = require("../schema")

/**
* Redirection: contains most 3xx responses used.
* @param  {[Object]} res: http response object
*/
class Redirection{
    #res
    #options
    constructor(res, options = {}){
        this.#res = res
        this.#options = options
    }
    /**
    * 300 Multiple Choices: There are multiple options for the resource from which the client may choose.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    MultipleChoices(message){
        const msg = 'multiple options'
        const payload = Schema({status: 300, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 301 Moved Permanently: The resource requested has been definitively moved.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    MovedPermanently(message){
        const msg = 'moved permanently'
        const payload = Schema({status: 301, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 302 Found: The resource requested has been temporarily moved.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    Found(message){
        const msg = 'resource found after moved permanently'
        const payload = Schema({status: 302, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 303 See Other: The response to the request can be found under another URI.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    SeeOther(message){
        const msg = 'request can be found under another URI'
        const payload = Schema({status: 303, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 304 Not Modified: The resource has not been modified since the version specified by the request headers.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    NotModified(message){
        const msg = 'resource has not been modified'
        const payload = Schema({status: 304, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 305 Use Proxy: The requested resource is available only through a proxy.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    UseProxy(message){
        const msg = 'requested resource is available only through a proxy'
        const payload = Schema({status: 305, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 307 Temporary Redirect: The request should be repeated with another URI.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    TemporaryRedirect(message){
        const msg = 'the request should be repeated with another URI'
        const payload = Schema({status: 307, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 308 Permanent Redirect: The request and all future requests should be repeated using another URI.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    PermanentRedirect(message){
        const msg = 'the request and all future requests should be repeated using another URI'
        const payload = Schema({status: 308, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }
}

module.exports = Redirection