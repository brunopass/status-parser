const Status = require("../..")
const Success = new Status().success()

test('200 OK status test', ()=>{
    expect(JSON.stringify(Success.OK())).toBe(`{"status":200,"message":"successful request","success":"successful request"}`)
})

test('201 Created status test', ()=>{
    expect(JSON.stringify(Success.Created())).toBe(`{"status":201,"message":"resource created","success":"resource created"}`)
})

test('202 Accepted status test', ()=>{
    expect(JSON.stringify(Success.Accepted())).toBe(`{"status":202,"message":"request accepted","success":"request accepted"}`)
})

test('203 Non Authoritative Information test', ()=>{
    expect(JSON.stringify(Success.NonAuthoritativeInformation())).toBe(`{"status":203,"message":"modified origin response","success":"modified origin response"}`)
})