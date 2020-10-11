'use strict'

const Schema = require("../schema")

class Redirection{
    MultipleChoices = message => {
        const msg = 'multiple options'
        return Schema({status: 300, data: message || msg, message: msg})
    }

    MovedPermanently = message => {
        const msg = 'moved permanently'
        return Schema({status: 301, data: message || msg, message: msg})
    }

    Found = message => {
        const msg = 'resource found after moved permanently'
        return Schema({status: 302, data: message || msg, message: msg})
    }

    SeeOther = message => {
        const msg = 'request can be found under another URI'
        return Schema({status: 303, data: message || msg, message: msg})
    }

    NotModified = message => {
        const msg = 'resource has not been modified'
        return Schema({status: 304, data: message || msg, message: msg})
    }

    UseProxy = message => {
        const msg = 'requested resource is available only through a proxy'
        return Schema({status: 305, data: message || msg, message: msg})
    }

    TemporaryRedirect = message => {
        const msg = 'the request should be repeated with another URI'
        return Schema({status: 307, data: message || msg, message: msg})
    }

    PermanentRedirect = message => {
        const msg = 'the request and all future requests should be repeated using another URI'
        return Schema({status: 308, data: message || msg, message: msg})
    }
}

module.exports = Redirection