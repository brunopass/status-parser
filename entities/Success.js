'use strict'

const Schema = require("../schema")


class Success{
    OK = message => {
        const msg = 'successful request'
        return Schema({status: 200, success: message || msg, message: msg})
    }

    Created = message => {
        const msg = 'resource created'
        return Schema({status: 201, success: message || msg, message: msg})
    }

    Accepted = message => {
        const msg = 'request accepted'
        return Schema({status: 202, success: message || msg, message: msg})
    }

    NonAuthoritativeInformation = message => {
        const msg = 'modified origin response'
        return Schema({status: 203, success: message || msg, message: msg})
    }

    NoContent = message => {
        const msg = 'successfully request with no content returned'
        return Schema({status: 204, success: message || msg, message: msg})
    }

    ResetContent = message => {
        const msg = 'reset content'
        return Schema({status: 205, success: message || msg, message: msg})
    }

    PartialContent = message => {
        const msg = 'returned only part of the resources'
        return Schema({status: 206, success: message || msg, message: msg})
    } 
    
    MultiStatus = message => {
        const msg = 'multiple status'
        return Schema({status: 207, success: message || msg, message: msg})
    }

    AlreadyReported = message => {
        const msg = 'already reported'
        return Schema({status: 208, success: message || msg, message: msg})
    }

    IMUsed = message => {
        const msg = 'request for the resource fulfilled'
        return Schema({status: 226, success: message || msg, message: msg})
    }
}

module.exports = Success