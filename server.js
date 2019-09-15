const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send('getting root');    //access te query string for ex localhost:3000/?name=naman&age=20
    //req.body
    //req.header
    //req.params
});













// app.get('/profile',(req,res)=>{
//     res.send('hello boy');
// })
// app.post('/profile',(req,res)=>{
//     console.log(req.body);
//     const user={
//         name:'Sally',
//         age:20
//     };

//     res.send(user);
// })
app.listen(3000);



