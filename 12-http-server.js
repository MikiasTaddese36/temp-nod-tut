const http = require('http');

const server = http.createServer((req, res)=>{
//console.log(req);
if(req.url === '/'){
    res.end('Hello and Welcome to our page');
}
if(req.url === '/about'){
    res.end('This is our short history');
}

res.end(`
    <h1>Oops</h1>
    <p>The Page you requested couldn't be located</p>
    <a href="/">Back to Home Page</a>
    `)


});

server.listen(5000);