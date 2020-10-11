const status = require('../../index')
const Success = status.success()

test('200 OK status test', ()=>{
    expect(JSON.stringify(Success.OK())).toBe(`{"status":200,"message":"successful request","data":"successful request"}`)
})

test('201 Created status test', ()=>{
    expect(JSON.stringify(Success.Created())).toBe(`{"status":201,"message":"resource created","data":"resource created"}`)
})

test('202 Accepted status test', ()=>{
    expect(JSON.stringify(Success.Accepted())).toBe(`{"status":202,"message":"request accepted","data":"request accepted"}`)
})

test('203 Non Authoritative Information test', ()=>{
    expect(JSON.stringify(Success.NonAuthoritativeInformation())).toBe(`{"status":203,"message":"modified origin response","data":"modified origin response"}`)
})

test('204 No Content status test', ()=>{
    expect(JSON.stringify(Success.NoContent())).toBe(`{"status":204,"message":"successfully request with no content returned","data":"successfully request with no content returned"}`)
})

test('205 Reset Content status test', ()=>{
    expect(JSON.stringify(Success.ResetContent())).toBe(`{"status":205,"message":"reset content","data":"reset content"}`)
})

test('206 Partial Content status test', ()=>{
    expect(JSON.stringify(Success.PartialContent())).toBe(`{"status":206,"message":"returned only part of the resources","data":"returned only part of the resources"}`)
})

test('207 Multi Status status test', ()=>{
    expect(JSON.stringify(Success.MultiStatus())).toBe(`{"status":207,"message":"multiple status","data":"multiple status"}`)
})

test('208 Already Reported status test', ()=>{
    expect(JSON.stringify(Success.AlreadyReported())).toBe(`{"status":208,"message":"already reported","data":"already reported"}`)
})

test('226 IMUsed status test', ()=>{
    expect(JSON.stringify(Success.IMUsed())).toBe(`{"status":226,"message":"request for the resource fulfilled","data":"request for the resource fulfilled"}`)
})