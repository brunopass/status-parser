# Status Parser

Express.js HTTP friendly responses handler

## Getting Started 🚀

### Installation
_copy and paste this code into the terminal_
```powershell
npm install status-parser --save
```

### Examples

_return response 100 on success_
```javascript

const status = require('status-parser')

const response = status.success().OK() 

console.log(response)// => {"status":200,"message":"successful request","data":"successful request"}

```

_send response 201 on success_
```javascript
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    status.success(res).Created() // => {"status":201,"message":"resource created","data":"resource created"}

})
```

_send error response 400_
```javascript
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    status.clientError(res).BadRequest('this is an error message') // => {"status":400,"message":"bad request","error":"this is an error message"}

})
```

_add personalizated data to 202 response_
```javascript
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    const data = {
        "friends": {}
    }

    status.success(res).Accepted(data) // =>  {"status":202,"message":"request accepted","data":{"friends":{}}}

})
```

_add personalizated headers to 200 response_
```javascript
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    const data = {
        "friends": {}
    }

    const options = {
        header: {
            "Content-Type": "application/json"
        }
    }

    status.success(res,options).OK(data)

})
```

_add personalizated cookie to 200 response_
```javascript
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    const data = {
        "friends": {}
    }

    const options = {
        header: {
            "Content-Type": "application/json"
        },
        cookie: {
            "name": "token",
            "val": "secret",
            options:{
                "httpOnly":true
            }
        }
    }

    status.success(res,options).OK(data)

})
```

_all response status from 1xx to 5xx_
```javascript
const status = require('status-parser')

const methods = {
    "1xx": status.information(),
    "2xx": status.success(),
    "3xx": status.redirect(),
    "4xx": status.clientError(),
    "5xx": status.serverError()
}
```

_real world example_
```javascript
const router = require('express').Router()
const status = require('status-parser')
const {User} = require('./entities/user.js')

router.post('/sign-in', (req,res)=>{

    const {email,password} = req.body

    new User()
    .signIn(email,password)
    .then(jwt => {

        const options = {
            cookie: {
                "name": "token",
                "val": jwt,
                options:{
                    "httpOnly":true
                }
            }
        }

        status.success(res,options).OK('signed in')

    })
    .catch(error => {
        status.clientError(res).BadRequest(error.message)
    })
})

```

## Author ✒️

* **Bruno Passarelli** - [brunopass](https://github.com/brunopass)

## Licence 📄

this project is licensed under the MIT license
