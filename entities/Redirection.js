'use strict'

class Redirection{
    MultipleChoices = message => {
        const msg = 'internal server error'
        return Schema({status: 500, success: message || msg, message: msg})
    }

    MovedPermanently = message => {

    }

    Found = message => {

    }

    SeeOther = message => {

    }

    NotModified = message => {

    }

    UseProxy = message => {

    }

    SwitchProxy = message => {

    }

    TemporaryRedirect = message => {

    }

    PermanentRedirect = message => {

    }
}

module.exports = Redirection