const onSuccess = (res,payload) => {
    const {status, message, data} = payload

    res.status(status || 200).send({message, data})
}

const onError = (res,payload) => {
    const {status, message, error} = payload

    res.status(status || 400).send({message, error})
}

module.exports = {
    onSuccess,
    onError
}