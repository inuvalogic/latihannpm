var http = require('http');
const axios = require('axios');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');

    // Make a request for a user with a given ID
    const result = axios.get('https://6367718279b0914b75e05f77.mockapi.io/users')
        .then(function (response) {
            // handle success
            for (let i = 0; i < response.data.length; i++) {
                const item = response.data[i];
                console.log('Name: ' + item.name + '\n');
                console.log('Avatar: ' + item.avatar + '\n');
                console.log('Created At: ' + item.createdAt + '\n');
                console.log('----------------------\n');
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}).listen(8080);