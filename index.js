const ClientError = require("./src/entities/ClientError")
const InformationalResponse = require("./src/entities/InformationalResponse")
const Redirection = require("./src/entities/Redirection")
const Success = require("./src/entities/Success")

class Status{
    #options
    constructor(options){
        this.#options = options
    }

    //1xx
    informationalResponse = () => {
        return new InformationalResponse()
    }

    //2xx
    success = () => {
        return new Success()
    }

    //3xx
    redirection = () => {
        return new Redirection()
    }

    //4xx
    clientError = () => {
        return new ClientError()
    }
    
}

module.exports = Status