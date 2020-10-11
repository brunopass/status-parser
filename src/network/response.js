const onSuccess = (res,payload) => {
    const {status, message, data} = payload

    res.status(status).send({message, data})
}

const onError = (res,payload) => {
    const { status, message, error} = payload
    
    res.status(status).send({message, error})
}

module.exports = {
    onSuccess,
    onError
}