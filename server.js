//Test:
// const { createServer } = require('http')
// createServer((req, res)=>{
//     res.end('Helloworld!')
// }).listen(3000)

const express = require('express')
const app = express()
var PORT = process.env.PORT || 3000


app.use(express.static('../app/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const route1 = require('./routes/htmlRoutes.js')
route1(app)
// const route2 = require('./routes/apiRoutes.js')
// route2(app)


//test
// const myFriends = [
//     {
//         id:1,
//         name: 'Min YoonGi',
//         email: 'agustD@gmail.com',
//         password: 'sugabts'
//     }]
 



app.listen(PORT, function(){
    console.log('Server: ' + PORT)
})