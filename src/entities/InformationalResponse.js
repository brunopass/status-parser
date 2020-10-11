'use strict'

const Schema = require("../schema")

class InformationalResponse{
    /**
    * 100 Continue: The server has received the request headers and the client should proceed to send the request body.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    Continue(message){
        const msg = 'proceed to send the request body'
        return Schema({status: 100, success: message || msg, message: msg})
    }

    /**
    * 101 Switching Protocols: The requester has asked the server to switch protocols and the server has agreed to do so.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    SwitchingProtocols(message){
        const msg = 'protocols switched'
        return Schema({status: 101, success: message || msg, message: msg})
    }

    /**
    * 102 Processing: This code indicates that the server has received and is processing the request.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    Processing(message){
        const msg = 'processing request'
        return Schema({status: 102, success: message || msg, message: msg})
    }

    /**
    * 103 Early Hints: Used to return some response headers before final HTTP message.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    EarlyHints(message){
        const msg = 'response headers'
        return Schema({status: 103, success: message || msg, message: msg})
    }
}

module.exports = InformationalResponse