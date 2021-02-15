const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let send = {
            name: 'Luis Pernia',
            email: 'luispcode@gmail.com',
            password: 'KD*#O!FUBANKFJNQ8173917481'
        }

        res.write(JSON.stringify(send));

        res.end();
    })
    .listen(8080);

console.log('listen to port 8080');