const status = require('../../index')
const Server = status.serverError()

test('500 Internal Server Error status test 1/2', ()=>{
    expect(JSON.stringify(Server.InternalServerError())).toBe(`{"status":500,"message":"internal server error","error":"internal server error"}`)
})

test('500 Internal Server Error status test 2/2', ()=>{
    expect(JSON.stringify(Server.InternalServerError('ok'))).toBe(`{"status":500,"message":"internal server error","error":"ok"}`)
})

test('501 Not implemented status test 1/2', ()=>{
    expect(JSON.stringify(Server.NotImplemented())).toBe(`{"status":501,"message":"request method not recognized","error":"request method not recognized"}`)
})

test('501 Not implemented status test 2/2', ()=>{
    expect(JSON.stringify(Server.NotImplemented('ok'))).toBe(`{"status":501,"message":"request method not recognized","error":"ok"}`)
})

test('502 Bad Gateway status test 1/2', ()=>{
    expect(JSON.stringify(Server.BadGateway())).toBe(`{"status":502,"message":"invalid response","error":"invalid response"}`)
})

test('502 Bad Gateway status test 2/2', ()=>{
    expect(JSON.stringify(Server.BadGateway('ok'))).toBe(`{"status":502,"message":"invalid response","error":"ok"}`)
})

test('503 Service Unavailable status test 1/2', ()=>{
    expect(JSON.stringify(Server.ServiceUnavailable())).toBe(`{"status":503,"message":"service is not available","error":"service is not available"}`)
})

test('503 Service Unavailable status test 2/2', ()=>{
    expect(JSON.stringify(Server.ServiceUnavailable('ok'))).toBe(`{"status":503,"message":"service is not available","error":"ok"}`)
})

test('504 Gateway Timeout status test 1/2', ()=>{
    expect(JSON.stringify(Server.GatewayTimeout())).toBe(`{"status":504,"message":"gateway timeout","error":"gateway timeout"}`)
})

test('504 Gateway Timeout status test 2/2', ()=>{
    expect(JSON.stringify(Server.GatewayTimeout('ok'))).toBe(`{"status":504,"message":"gateway timeout","error":"ok"}`)
})

test('505 HTTP Version Not Supported status test 1/2', ()=>{
    expect(JSON.stringify(Server.HTTPVersionNotSupported())).toBe(`{"status":505,"message":"http protocol version not supported","error":"http protocol version not supported"}`)
})

test('505 HTTP Version Not Supported status test 2/2', ()=>{
    expect(JSON.stringify(Server.HTTPVersionNotSupported('ok'))).toBe(`{"status":505,"message":"http protocol version not supported","error":"ok"}`)
})

test('506 Variant Also Negotiates status test 1/2', ()=>{
    expect(JSON.stringify(Server.VariantAlsoNegotiates())).toBe(`{"status":506,"message":"circular reference","error":"circular reference"}`)
})

test('506 Variant Also Negotiates status test 2/2', ()=>{
    expect(JSON.stringify(Server.VariantAlsoNegotiates('ok'))).toBe(`{"status":506,"message":"circular reference","error":"ok"}`)
})

test('507 Insufficient Storage status test 1/2', ()=>{
    expect(JSON.stringify(Server.InsufficientStorage())).toBe(`{"status":507,"message":"insufficient storage","error":"insufficient storage"}`)
})

test('507 Insufficient Storage status test 2/2', ()=>{
    expect(JSON.stringify(Server.InsufficientStorage('ok'))).toBe(`{"status":507,"message":"insufficient storage","error":"ok"}`)
})

test('508 Loop Detected status test 1/2', ()=>{
    expect(JSON.stringify(Server.LoopDetected())).toBe(`{"status":508,"message":"infinite loop detected","error":"infinite loop detected"}`)
})

test('508 Loop Detected status test 2/2', ()=>{
    expect(JSON.stringify(Server.LoopDetected('ok'))).toBe(`{"status":508,"message":"infinite loop detected","error":"ok"}`)
})

test('510 Not Extended status test 1/2', ()=>{
    expect(JSON.stringify(Server.NotExtended())).toBe(`{"status":510,"message":"further extensions required","error":"further extensions required"}`)
})

test('510 Not Extended status test 2/2', ()=>{
    expect(JSON.stringify(Server.NotExtended('ok'))).toBe(`{"status":510,"message":"further extensions required","error":"ok"}`)
})

test('511 Network Authentication Required status test 1/2', ()=>{
    expect(JSON.stringify(Server.NetworkAuthenticationRequired())).toBe(`{"status":511,"message":"client needs to authenticate to gain network access","error":"client needs to authenticate to gain network access"}`)
})

test('511 Network Authentication Required status test 2/2', ()=>{
    expect(JSON.stringify(Server.NetworkAuthenticationRequired('ok'))).toBe(`{"status":511,"message":"client needs to authenticate to gain network access","error":"ok"}`)
})