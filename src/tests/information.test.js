const status = require('../../index')
const Info = status.information()

test('100 Continue status test 1/2', ()=>{
    expect(JSON.stringify(Info.Continue())).toBe(`{"status":100,"message":"proceed to send the request body","data":"proceed to send the request body"}`)
})

test('100 Continue status test 2/2', ()=>{
    expect(JSON.stringify(Info.Continue('ok'))).toBe(`{"status":100,"message":"proceed to send the request body","data":"ok"}`)
})

test('101 Switching Protocols status test 1/2', ()=>{
    expect(JSON.stringify(Info.SwitchingProtocols())).toBe(`{"status":101,"message":"protocols switched","data":"protocols switched"}`)
})

test('101 Switching Protocols status test 2/2', ()=>{
    expect(JSON.stringify(Info.SwitchingProtocols('ok'))).toBe(`{"status":101,"message":"protocols switched","data":"ok"}`)
})

test('102 Processing status test 1/2', ()=>{
    expect(JSON.stringify(Info.Processing())).toBe(`{"status":102,"message":"processing request","data":"processing request"}`)
})

test('102 Processing status test 2/2', ()=>{
    expect(JSON.stringify(Info.Processing('ok'))).toBe(`{"status":102,"message":"processing request","data":"ok"}`)
})

test('103 EarlyHints status test 1/2', ()=>{
    expect(JSON.stringify(Info.EarlyHints())).toBe(`{"status":103,"message":"response headers","data":"response headers"}`)
})

test('103 EarlyHints status test 2/2', ()=>{
    expect(JSON.stringify(Info.EarlyHints('ok'))).toBe(`{"status":103,"message":"response headers","data":"ok"}`)
})