const http = require('http');

http.createServer((req , res)=>{

/*-console.log(req);
res.writeHead(200 , {'Content-Type':'application/json'});

const user = {
    id:1234,
    name:'Pedro'
}*/
res.setHeader('Content-Disposition','attachmen;filename=usuarios.csv')
res.writeHead(200 , {'Content-Type':'application/csv'});
res.write('id , name \n123,pedro\n456,gabriela');
res.end();



} ).listen(3000);




