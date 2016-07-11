const Fs = require('fs');
const Hapi = require('hapi');
const Path = require('path');
const Rot13 = require('rot13-transform');
const server = new Hapi.Server();

server.connection({
    host :'localhost',
    port:Number(process.argv[2]||8080)
});


server.route({
    method: 'GET',
    path:'/',
    handler:(request,reply)=>{
        var thisFile = Fs.createReadStream(Path.join(__dirname,'input.txt'))
        reply(thisFile.pipe(Rot13()));
    }
})

server.start((err)=>{
    if(err) throw err
})