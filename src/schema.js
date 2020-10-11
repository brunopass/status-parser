const Schema = payload => {
    const {status, message, data, error} = payload

    if(error){
        return{
                status: status,
                message: message,
                error: error
            }
    }

    return{
            status: status,
            message: message,
            data: data
        }
}

module.exports = Schema