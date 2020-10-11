const status = require('../../index')
const Redirection = status.redirection()

test('300 Multiple Choices status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.MultipleChoices())).toBe(`{"status":300,"message":"multiple options","data":"multiple options"}`)
})

test('300 Multiple Choices status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.MultipleChoices('ok'))).toBe(`{"status":300,"message":"multiple options","data":"ok"}`)
})

test('301 Moved Permanently status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.MovedPermanently())).toBe(`{"status":301,"message":"moved permanently","data":"moved permanently"}`)
})

test('301 Moved Permanently status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.MovedPermanently('ok'))).toBe(`{"status":301,"message":"moved permanently","data":"ok"}`)
})

test('302 Found status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.Found())).toBe(`{"status":302,"message":"resource found after moved permanently","data":"resource found after moved permanently"}`)
})

test('302 Found status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.Found('ok'))).toBe(`{"status":302,"message":"resource found after moved permanently","data":"ok"}`)
})

test('303 See Other status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.SeeOther())).toBe(`{"status":303,"message":"request can be found under another URI","data":"request can be found under another URI"}`)
})

test('303 See Other status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.SeeOther('ok'))).toBe(`{"status":303,"message":"request can be found under another URI","data":"ok"}`)
})

test('304 Not Modified status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.NotModified())).toBe(`{"status":304,"message":"resource has not been modified","data":"resource has not been modified"}`)
})

test('304 Not Modified status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.NotModified('ok'))).toBe(`{"status":304,"message":"resource has not been modified","data":"ok"}`)
})

test('305 Use Proxy status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.UseProxy())).toBe(`{"status":305,"message":"requested resource is available only through a proxy","data":"requested resource is available only through a proxy"}`)
})

test('305 Use Proxy status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.UseProxy('ok'))).toBe(`{"status":305,"message":"requested resource is available only through a proxy","data":"ok"}`)
})

test('307 Temporary Redirect status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.TemporaryRedirect())).toBe(`{"status":307,"message":"the request should be repeated with another URI","data":"the request should be repeated with another URI"}`)
})

test('307 Temporary Redirect status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.TemporaryRedirect('ok'))).toBe(`{"status":307,"message":"the request should be repeated with another URI","data":"ok"}`)
})

test('308 Permanent Redirect status test 1/2', ()=>{
    expect(JSON.stringify(Redirection.PermanentRedirect())).toBe(`{"status":308,"message":"the request and all future requests should be repeated using another URI","data":"the request and all future requests should be repeated using another URI"}`)
})

test('308 Permanent Redirect status test 2/2', ()=>{
    expect(JSON.stringify(Redirection.PermanentRedirect('ok'))).toBe(`{"status":308,"message":"the request and all future requests should be repeated using another URI","data":"ok"}`)
})