const ClientError = require("./src/entities/ClientError")
const InformationalResponse = require("./src/entities/InformationalResponse")
const Redirection = require("./src/entities/Redirection")
const ServerError = require("./src/entities/ServerError")
const Success = require("./src/entities/Success")

class StatusParser{
    //1xx
    /**
    * Information: contains most 1xx responses used.
    * @param  {[Object]} res: http response object
    */
    information(res){
        return new InformationalResponse(res)
    }

    //2xx
    /**
    * Success: contains most 2xx responses used.
    * @param  {[Object]} res: http response object
    */
    success(res){
        return new Success(res)
    }

    //3xx
    /**
    * Redirection: contains most 3xx responses used.
    * @param  {[Object]} res: http response object
    */
    redirection(res){
        return new Redirection(res)
    }

    //4xx
    /**
    * Client Error: contains most 4xx responses used.
    * @param  {[Object]} res: http response object
    */
    clientError(res){
        return new ClientError(res)
    }

    //5xx
    /**
    * Server Error: contains most 5xx responses used.
    * @param  {[Object]} res: http response object
    */
    serverError(res){
        return new ServerError(res)
    }
    
}

const statusParser = new StatusParser()

module.exports = statusParser