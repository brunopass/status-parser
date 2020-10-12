'use strict'

const { onSuccess } = require("../network/response")
const Schema = require("../schema")

/**
* Information: contains most 1xx responses used.
* @param  {[Object]} res: http response object
*/
class InformationalResponse{
    #res
    #options
    constructor(res, options = {}){
        this.#res = res
        this.#options = options
    }
    /**
    * 100 Continue: The server has received the request headers and the client should proceed to send the request body.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    Continue(message){
        const msg = 'proceed to send the request body'
        const payload = Schema({status: 100, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 101 Switching Protocols: The requester has asked the server to switch protocols and the server has agreed to do so.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    SwitchingProtocols(message){
        const msg = 'protocols switched'
        const payload = Schema({status: 101, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 102 Processing: This code indicates that the server has received and is processing the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    Processing(message){
        const msg = 'processing request'
        const payload = Schema({status: 102, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }

    /**
    * 103 Early Hints: Used to return some response headers before final HTTP message.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    EarlyHints(message){
        const msg = 'response headers'
        const payload = Schema({status: 103, data: message || msg, message: msg})
        if(this.#res){
            onSuccess(this.#res, this.#options, payload)
        }
        return payload
    }
}

module.exports = InformationalResponse