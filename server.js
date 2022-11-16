const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //set header content type
    console.log(req.url, req.method);

    res.setHeader('content-Type', 'text/html');

    let path='./views/';
    switch(req.url) {
        case '/':
        path+= 'index.html';
        res.statusCode = 200;
        break;
        case'/about':
        path+= 'about.html';
        res.statusCode = 200;
        break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location', './about');
            res.end();
        default:
            path+= '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err,data) => {
        if(err) {
            console.timeLog(err);
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requist on port 3000');
})