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
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    const response = status.success().OK()

})
```

_send response 201 on success_
```javascript
const router = require('express').Router()
const status = require('status-parser')

router.get('/', (req,res)=>{

    status.success(res).Created()

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

    status.success(res).Accepted(data)

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

## Author ✒️

* **Bruno Passarelli** - [brunopass](https://github.com/brunopass)

## Licence 📄

this project is licensed under the MIT license