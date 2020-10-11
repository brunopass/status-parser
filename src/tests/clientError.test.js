const status = require('../../index')
const Client = status.clientError()

test('400 Bad Request status test 1/2', ()=> {
    expect(JSON.stringify(Client.BadRequest())).toBe(`{"status":400,"message":"bad request","error":"bad request"}`)
})

test('400 Bad Request status test 2/2', ()=> {
    expect(JSON.stringify(Client.BadRequest('ok'))).toBe(`{"status":400,"message":"bad request","error":"ok"}`)
})

test('401 Unauthorized status test 1/2', ()=> {
    expect(JSON.stringify(Client.Unauthorized())).toBe(`{"status":401,"message":"unauthorized","error":"unauthorized"}`)
})

test('401 Unauthorized status test 2/2', ()=> {
    expect(JSON.stringify(Client.Unauthorized('ok'))).toBe(`{"status":401,"message":"unauthorized","error":"ok"}`)
})

test('402 PaymentRequired status test 1/2', ()=> {
    expect(JSON.stringify(Client.PaymentRequired())).toBe(`{"status":402,"message":"payment required","error":"payment required"}`)
})

test('402 PaymentRequired status test 2/2', ()=> {
    expect(JSON.stringify(Client.PaymentRequired('ok'))).toBe(`{"status":402,"message":"payment required","error":"ok"}`)
})

test('403 Forbidden status test 1/2', ()=> {
    expect(JSON.stringify(Client.Forbidden())).toBe(`{"status":403,"message":"request forbidden","error":"request forbidden"}`)
})

test('403 Forbidden status test 2/2', ()=> {
    expect(JSON.stringify(Client.Forbidden('ok'))).toBe(`{"status":403,"message":"request forbidden","error":"ok"}`)
})

test('404 NotFound status test 1/2', ()=> {
    expect(JSON.stringify(Client.NotFound())).toBe(`{"status":404,"message":"not found","error":"not found"}`)
})

test('404 NotFound status test 2/2', ()=> {
    expect(JSON.stringify(Client.NotFound('ok'))).toBe(`{"status":404,"message":"not found","error":"ok"}`)
})

test('405 Method Not Allowed status test 1/2', ()=> {
    expect(JSON.stringify(Client.MethodNotAllowed())).toBe(`{"status":405,"message":"method not allowed","error":"method not allowed"}`)
})

test('405 Method Not Allowed status test 2/2', ()=> {
    expect(JSON.stringify(Client.MethodNotAllowed('ok'))).toBe(`{"status":405,"message":"method not allowed","error":"ok"}`)
})

test('406 NotAcceptable status test 1/2', ()=> {
    expect(JSON.stringify(Client.NotAcceptable())).toBe(`{"status":406,"message":"request not acceptable","error":"request not acceptable"}`)
})

test('406 NotAcceptable status test 2/2', ()=> {
    expect(JSON.stringify(Client.NotAcceptable('ok'))).toBe(`{"status":406,"message":"request not acceptable","error":"ok"}`)
})

test('407 Proxy Authentication Required status test 1/2', ()=> {
    expect(JSON.stringify(Client.ProxyAuthenticationRequired())).toBe(`{"status":407,"message":"proxy authentication required","error":"proxy authentication required"}`)
})

test('407 Proxy Authentication Required status test 2/2', ()=> {
    expect(JSON.stringify(Client.ProxyAuthenticationRequired('ok'))).toBe(`{"status":407,"message":"proxy authentication required","error":"ok"}`)
})

test('408 Request Timeout status test 1/2', ()=> {
    expect(JSON.stringify(Client.RequestTimeout())).toBe(`{"status":408,"message":"request timeout","error":"request timeout"}`)
})

test('408 Request Timeout status test 2/2', ()=> {
    expect(JSON.stringify(Client.RequestTimeout('ok'))).toBe(`{"status":408,"message":"request timeout","error":"ok"}`)
})

test('409 Conflict status test 1/2', ()=> {
    expect(JSON.stringify(Client.Conflict())).toBe(`{"status":409,"message":"request could not be processed because of conflict in the current state of the resource","error":"request could not be processed because of conflict in the current state of the resource"}`)
})

test('409 Conflict status test 2/2', ()=> {
    expect(JSON.stringify(Client.Conflict('ok'))).toBe(`{"status":409,"message":"request could not be processed because of conflict in the current state of the resource","error":"ok"}`)
})

test('410 Gone status test 1/2', ()=> {
    expect(JSON.stringify(Client.Gone())).toBe(`{"status":410,"message":"resource requested is no longer available","error":"resource requested is no longer available"}`)
})

test('410 Gone status test 2/2', ()=> {
    expect(JSON.stringify(Client.Gone('ok'))).toBe(`{"status":410,"message":"resource requested is no longer available","error":"ok"}`)
})

test('411 Length Required status test 1/2', ()=> {
    expect(JSON.stringify(Client.LengthRequired())).toBe(`{"status":411,"message":"request did not specify the length of its content","error":"request did not specify the length of its content"}`)
})

test('411 Length Required status test 2/2', ()=> {
    expect(JSON.stringify(Client.LengthRequired('ok'))).toBe(`{"status":411,"message":"request did not specify the length of its content","error":"ok"}`)
})

test('412 Precondition Failed status test 1/2', ()=> {
    expect(JSON.stringify(Client.PreconditionFailed())).toBe(`{"status":412,"message":"precondition failed","error":"precondition failed"}`)
})

test('412 Precondition Failed status test 2/2', ()=> {
    expect(JSON.stringify(Client.PreconditionFailed('ok'))).toBe(`{"status":412,"message":"precondition failed","error":"ok"}`)
})