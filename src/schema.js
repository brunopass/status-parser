const Schema = data => {
    const {status, message, success, error} = data

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
            data: success
        }
}

module.exports = Schema