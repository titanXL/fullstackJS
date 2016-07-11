const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const server = new Hapi.Server();
const Vision = require('vision');
server.connection({
    host:'localhost',
    port : Number(process.argv[2]||8080)
    });

server.register(Vision,(err)=>{
    if(err) throw err;
})

server.route({
    method : 'GET',
    path : '/',
    handler : {
        view : 'template.html'
    }
})

server.views({
    engines :{
        html : require('handlebars')
    },
    path : Path.join(__dirname,'templates'),
    helpersPath : Path.join(__dirname,'helpers')
})

server.start((err)=>{
    if(err)throw err;
    console.log(`Server running at ${server.info.uri}`)
})