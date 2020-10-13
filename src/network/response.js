const onSuccess = (res,option,payload) => {
    try{
        const {status, message, data} = payload
        const {header, cookie} = option
    
        if(cookie){
            const {name,val,options} = cookie
            if(name != undefined || val != undefined){
                res.status(status).header(header).cookie(name,val,options).send({message, data})
            }
            res.status(status).header(header).send({message, data})
        }
    
        res.status(status).header(header).send({message, data})
    }catch(error){
        console.error(error)
    }
}

const onError = (res,option,payload) => {
    try{
        const { status, message, error} = payload
        const {header, cookie} = option
        
        if(cookie){
            const {name,val,options} = cookie
            if(name != undefined || val != undefined){
                res.status(status).header(header).cookie(name,val,options).send({message, error})
            }
            res.status(status).header(header).send({message, error})
        }
    
        res.status(status).header(header).send({message, error})
    }catch(error){
        console.error(error)
    }
}

module.exports = {
    onSuccess,
    onError
}