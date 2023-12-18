// import json server import using require method 

const jsonserver=require('json-server')


//    create server


const server=jsonserver.create()

const router=jsonserver.router('db.json')

// create middleware

const middleware=jsonserver.defaults()


// set port for server

const PORT=process.env.PORT||4000

// use middleware in server

server.use(middleware)
server.use(router)

// to work server

server.listen(PORT,()=>{
    console.log('media player server started at port'+PORT);
})