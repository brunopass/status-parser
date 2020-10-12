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
    * @param  {[JSON]} options: {header: {"name":"value"}, cookie: {name: "value", val: "value", options: {"name":"value"}}}
    */
    information(res,options){
        return new InformationalResponse(res,options)
    }

    //2xx
    /**
    * Success: contains most 2xx responses used.
    * @param  {[Object]} res: http response object
    * @param  {[JSON]} options: {header: {"name":"value"}, cookie: {name: "value", val: "value", options: {"name":"value"}}}
    */
    success(res,options){
        return new Success(res,options)
    }

    //3xx
    /**
    * Redirection: contains most 3xx responses used.
    * @param  {[Object]} res: http response object
    * @param  {[JSON]} options: {header: {"name":"value"}, cookie: {name: "value", val: "value", options: {"name":"value"}}}
    */
    redirection(res,options){
        return new Redirection(res,options)
    }

    //4xx
    /**
    * Client Error: contains most 4xx responses used.
    * @param  {[Object]} res: http response object
    * @param  {[JSON]} options: {header: {"name":"value"}, cookie: {name: "value", val: "value", options: {"name":"value"}}}
    */
    clientError(res,options){
        return new ClientError(res,options)
    }

    //5xx
    /**
    * Server Error: contains most 5xx responses used.
    * @param  {[Object]} res: http response object
    * @param  {[JSON]} options: {header: {"name":"value"}, cookie: {name: "value", val: "value", options: {"name":"value"}}}
    */
    serverError(res,options){
        return new ServerError(res,options)
    }
    
}

const statusParser = new StatusParser()

module.exports = statusParser;