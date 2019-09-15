const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.get('/:id',(req,res)=>{
//     console.log(req.query);   //access te query string for ex localhost:3000/?name=naman&age=20
//     //req.body
//     //req.header
//     console.log(req.params);  //access to parameters for ex localhost:3000/1234
//     res.status(404).send('not found');   //sending the status

// });

app.use(express.static(__dirname + '/public'));   //middleware for serving static files using express















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



