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

test('413 Payload Too Large Failed status test 1/2', ()=> {
    expect(JSON.stringify(Client.PayloadTooLarge())).toBe(`{"status":413,"message":"payload is too large","error":"payload is too large"}`)
})

test('413 Payload Too Large Failed status test 2/2', ()=> {
    expect(JSON.stringify(Client.PayloadTooLarge('ok'))).toBe(`{"status":413,"message":"payload is too large","error":"ok"}`)
})

test('414 URI Too Long status test 1/2', ()=> {
    expect(JSON.stringify(Client.URITooLong())).toBe(`{"status":414,"message":"URI is too long","error":"URI is too long"}`)
})

test('414 URI Too Long status test 2/2', ()=> {
    expect(JSON.stringify(Client.URITooLong('ok'))).toBe(`{"status":414,"message":"URI is too long","error":"ok"}`)
})

test('415 Unsupported Media Type status test 1/2', ()=> {
    expect(JSON.stringify(Client.UnsuportedMediaType())).toBe(`{"status":415,"message":"media type not supported","error":"media type not supported"}`)
})

test('415 Unsupported Media Type status test 2/2', ()=> {
    expect(JSON.stringify(Client.UnsuportedMediaType('ok'))).toBe(`{"status":415,"message":"media type not supported","error":"ok"}`)
})

test('416 Range Not Satisfiable status test 1/2', ()=> {
    expect(JSON.stringify(Client.RangeNotSatisfiable())).toBe(`{"status":416,"message":"range not satisfiable","error":"range not satisfiable"}`)
})

test('416 Range Not Satisfiable status test 2/2', ()=> {
    expect(JSON.stringify(Client.RangeNotSatisfiable('ok'))).toBe(`{"status":416,"message":"range not satisfiable","error":"ok"}`)
})

test('417 Expectation Failed status test 1/2', ()=> {
    expect(JSON.stringify(Client.ExpectationFailed())).toBe(`{"status":417,"message":"expectation failed","error":"expectation failed"}`)
})

test('417 Expectation Failed status test 2/2', ()=> {
    expect(JSON.stringify(Client.ExpectationFailed('ok'))).toBe(`{"status":417,"message":"expectation failed","error":"ok"}`)
})

test('418 Teapot status test 1/2', ()=> {
    expect(JSON.stringify(Client.Teapot())).toBe(`{"status":418,"message":"teapot","error":"teapot"}`)
})

test('418 Teapot status test 2/2', ()=> {
    expect(JSON.stringify(Client.Teapot('ok'))).toBe(`{"status":418,"message":"teapot","error":"ok"}`)
})

test('421 Misdirected Request status test 1/2', ()=> {
    expect(JSON.stringify(Client.MisdirectedRequest())).toBe(`{"status":421,"message":"request was directed at a server that is not able to produce a response","error":"request was directed at a server that is not able to produce a response"}`)
})

test('421 Misdirected Request status test 2/2', ()=> {
    expect(JSON.stringify(Client.MisdirectedRequest('ok'))).toBe(`{"status":421,"message":"request was directed at a server that is not able to produce a response","error":"ok"}`)
})

test('422 Unprocessable Entity status test 1/2', ()=> {
    expect(JSON.stringify(Client.UnprocessableEntity())).toBe(`{"status":422,"message":"request was well-formed but was unable to be followed due to semantic errors","error":"request was well-formed but was unable to be followed due to semantic errors"}`)
})

test('422 Unprocessable Entity status test 2/2', ()=> {
    expect(JSON.stringify(Client.UnprocessableEntity('ok'))).toBe(`{"status":422,"message":"request was well-formed but was unable to be followed due to semantic errors","error":"ok"}`)
})

test('423 Locked test 1/2', ()=> {
    expect(JSON.stringify(Client.Locked())).toBe(`{"status":423,"message":"resource that is being accessed is locked","error":"resource that is being accessed is locked"}`)
})

test('423 Locked test 2/2', ()=> {
    expect(JSON.stringify(Client.Locked('ok'))).toBe(`{"status":423,"message":"resource that is being accessed is locked","error":"ok"}`)
})

test('424 Failed Dependency test 1/2', ()=> {
    expect(JSON.stringify(Client.FailedDependency())).toBe(`{"status":424,"message":"request failed because it depended on another request that failed","error":"request failed because it depended on another request that failed"}`)
})

test('424 Failed Dependency test 2/2', ()=> {
    expect(JSON.stringify(Client.FailedDependency('ok'))).toBe(`{"status":424,"message":"request failed because it depended on another request that failed","error":"ok"}`)
})

test('425 Too Early Dependency test 1/2', ()=> {
    expect(JSON.stringify(Client.TooEarly())).toBe(`{"status":425,"message":"request might be replayed","error":"request might be replayed"}`)
})

test('425 Too Early Dependency test 2/2', ()=> {
    expect(JSON.stringify(Client.TooEarly('ok'))).toBe(`{"status":425,"message":"request might be replayed","error":"ok"}`)
})

test('426 Upgrade Required test 1/2', ()=> {
    expect(JSON.stringify(Client.UpgradeRequired())).toBe(`{"status":426,"message":"switch protocol","error":"switch protocol"}`)
})

test('426 Upgrade Required test 2/2', ()=> {
    expect(JSON.stringify(Client.UpgradeRequired('ok'))).toBe(`{"status":426,"message":"switch protocol","error":"ok"}`)
})

test('428 Precondition Required test 1/2', ()=> {
    expect(JSON.stringify(Client.PreconditionRequired())).toBe(`{"status":428,"message":"precondition required","error":"precondition required"}`)
})

test('428 Precondition Required test 2/2', ()=> {
    expect(JSON.stringify(Client.PreconditionRequired('ok'))).toBe(`{"status":428,"message":"precondition required","error":"ok"}`)
})

test('429 Too Many Requests test 1/2', ()=> {
    expect(JSON.stringify(Client.TooManyRequests())).toBe(`{"status":429,"message":"too many requests","error":"too many requests"}`)
})

test('429 Too Many Requests test 2/2', ()=> {
    expect(JSON.stringify(Client.TooManyRequests('ok'))).toBe(`{"status":429,"message":"too many requests","error":"ok"}`)
})

test('431 Request Header Fields Too Large test 1/2', ()=> {
    expect(JSON.stringify(Client.RequestHeaderFieldsTooLarge())).toBe(`{"status":431,"message":"request header fields are too large","error":"request header fields are too large"}`)
})

test('431 Request Header Fields Too Large test 2/2', ()=> {
    expect(JSON.stringify(Client.RequestHeaderFieldsTooLarge('ok'))).toBe(`{"status":431,"message":"request header fields are too large","error":"ok"}`)
})

test('451 Unavailable For Legal Reasons test 1/2', ()=> {
    expect(JSON.stringify(Client.UnavailableForLegalReasons())).toBe(`{"status":451,"message":"unavailable for leagl reasons","error":"unavailable for leagl reasons"}`)
})

test('451 Unavailable For Legal Reasons test 2/2', ()=> {
    expect(JSON.stringify(Client.UnavailableForLegalReasons('ok'))).toBe(`{"status":451,"message":"unavailable for leagl reasons","error":"ok"}`)
})