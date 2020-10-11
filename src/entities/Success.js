'use strict'

const Schema = require("../schema")


class Success{

    /**
    * 200 OK: Standard response for successful HTTP requests.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    OK(message){
        const msg = 'successful request'
        return Schema({status: 200, success: message || msg, message: msg})
    }

    /**
    * 201 Created: The request has been fulfilled, resulting in the creation of a new resource.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    Created(message){
        const msg = 'resource created'
        return Schema({status: 201, success: message || msg, message: msg})
    }

    /**
    * 202 Accepted: The request has been accepted for processing, but the processing has not been completed.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    Accepted(message){
        const msg = 'request accepted'
        return Schema({status: 202, success: message || msg, message: msg})
    }

    /**
    * 203 Non Authoritative Information: The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version of the origin's response.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    NonAuthoritativeInformation(message){
        const msg = 'modified origin response'
        return Schema({status: 203, success: message || msg, message: msg})
    }

    /**
    * 204 No Content: The server successfully processed the request, and is not returning any content.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    NoContent(message){
        const msg = 'successfully request with no content returned'
        return Schema({status: 204, success: message || msg, message: msg})
    }

    /**
    * 205 Reset Content: The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    ResetContent(message){
        const msg = 'reset content'
        return Schema({status: 205, success: message || msg, message: msg})
    }

    /**
    * 206 Partial Content: The server is delivering only part of the resource due to a range header sent by the client.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    PartialContent(message){
        const msg = 'returned only part of the resources'
        return Schema({status: 206, success: message || msg, message: msg})
    } 
    
    /**
    * 207 Multi Status: The message body that follows is by default an XML message and can contain a number of separate response codes.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    MultiStatus(message){
        const msg = 'multiple status'
        return Schema({status: 207, success: message || msg, message: msg})
    }

    /**
    * 208 Already Reported: The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    AlreadyReported(message){
        const msg = 'already reported'
        return Schema({status: 208, success: message || msg, message: msg})
    }

    /**
    * 226 IM Used: The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, success: string, message: string}
    */
    IMUsed(message){
        const msg = 'request for the resource fulfilled'
        return Schema({status: 226, success: message || msg, message: msg})
    }
}

module.exports = Success