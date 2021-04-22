require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.static(__dirname +'/public'));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
    res.send('prueba post')
  })
 
app.listen(port, () =>{
console.log(`server started -port ${port}`);
});

