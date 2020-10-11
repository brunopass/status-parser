const status = require('../../index')
const Info = status.information()

test('', ()=>{
    expect(JSON.stringify(Info.Continue())).toBe(`{}`)
})