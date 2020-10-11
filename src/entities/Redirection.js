'use strict'

const Schema = require("../schema")

class Redirection{
    
    /**
    * 300 Multiple Choices: There are multiple options for the resource from which the client may choose.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    MultipleChoices = message => {
        const msg = 'multiple options'
        return Schema({status: 300, data: message || msg, message: msg})
    }

    /**
    * 301 Moved Permanently: The resource requested has been definitively moved.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    MovedPermanently = message => {
        const msg = 'moved permanently'
        return Schema({status: 301, data: message || msg, message: msg})
    }

    /**
    * 302 Found: The resource requested has been temporarily moved.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    Found = message => {
        const msg = 'resource found after moved permanently'
        return Schema({status: 302, data: message || msg, message: msg})
    }

    /**
    * 303 See Other: The response to the request can be found under another URI.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    SeeOther = message => {
        const msg = 'request can be found under another URI'
        return Schema({status: 303, data: message || msg, message: msg})
    }

    /**
    * 304 Not Modified: The resource has not been modified since the version specified by the request headers.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    NotModified = message => {
        const msg = 'resource has not been modified'
        return Schema({status: 304, data: message || msg, message: msg})
    }

    /**
    * 305 Use Proxy: The requested resource is available only through a proxy.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    UseProxy = message => {
        const msg = 'requested resource is available only through a proxy'
        return Schema({status: 305, data: message || msg, message: msg})
    }

    /**
    * 307 Temporary Redirect: The request should be repeated with another URI.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    TemporaryRedirect = message => {
        const msg = 'the request should be repeated with another URI'
        return Schema({status: 307, data: message || msg, message: msg})
    }

    /**
    * 308 Permanent Redirect: The request and all future requests should be repeated using another URI.
    * @param  {[string]} message: message to parse into response
    * @return {[JSON]} JSON{ status: integer, data: string, message: string}
    */
    PermanentRedirect = message => {
        const msg = 'the request and all future requests should be repeated using another URI'
        return Schema({status: 308, data: message || msg, message: msg})
    }
}

module.exports = Redirection