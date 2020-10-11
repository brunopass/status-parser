const ClientError = require("./src/entities/ClientError")
const InformationalResponse = require("./src/entities/InformationalResponse")
const Redirection = require("./src/entities/Redirection")
const ServerError = require("./src/entities/ServerError")
const Success = require("./src/entities/Success")

class StatusParser{
    #options
    constructor(options){
        this.#options = options
    }

    //1xx
    /** 
    *Contains 1xx informational status responses
    */
    information(){
        return new InformationalResponse()
    }

    //2xx
    /** 
    *Contains 2xx success status responses
    */
    success(){
        return new Success()
    }

    //3xx
    /** 
    *Contains 3xx redirection status responses
    */
    redirection(){
        return new Redirection()
    }

    //4xx
    /** 
    *Contains 4xx error status responses
    */
    clientError(){
        return new ClientError()
    }

    //5xx
    /** 
    *Contains 5xx server error status responses
    */
    serverError(){
        return new ServerError()
    }
    
}

const status = new StatusParser

module.exports = status