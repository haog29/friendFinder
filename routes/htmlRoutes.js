
const { join } = require('path')


module.exports = app => {

    app.get('/survey', (req, res) => {
            res.sendFile(join(__dirname,'../app/public/survey.html'))
           })

    app.get('/', (req,res)=>{
        res.sendFile(join(__dirname,'../app/public/index.html'))
    })
    app.get('*', (req,res) => {
        res.sendFile(join(__dirname,'../app/public/index.html'))
    })
}



// const myFriends = require('../app/data/friends.js')

// module.exports = app => {

// app.get('/myFriends', (req, res) => {
//     res.json(myFriends)
//    })
   
//    app.get('/myFriends/:id', (req, res) => {
//        myFriends.forEach(myFriends => {
//            if (myFriends.id === parseInt(req.params.id)){
//                res.json(myFriends)
//            }
//        })
//    })
   
//    app.post('/myFriends', (req,res) => {
       
//        newFriend.id = newFriend.lenghth + 1
//        myFriends.push(newFriend)
//        res.send('New member Was added!')
       
//    })
// }