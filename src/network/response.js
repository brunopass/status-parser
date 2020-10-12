const onSuccess = (res,option,payload) => {
    try{
        const {status, message, data} = payload
        const {header, cookie} = option
    
        if(cookie){
            const {name,val,options} = cookie
            res.status(status).header(header).cookie(name,val,options).send({message, data})
        }
    
        res.status(status).header(header).send({message, data})
    }catch(error){
        console.error(error)
    }
}

const onError = (res,option,payload) => {
    const { status, message, error} = payload
    const {header, cookie} = option
    if(cookie){
        const {name,val,options} = cookie
        res.status(status).header(header).cookie(name,val,options).send({message, error})
    }

    res.status(status).header(header).send({message, error})
}

module.exports = {
    onSuccess,
    onError
}