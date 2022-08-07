#!/usr/bin/env node

var args = process.argv.slice(2);
var username = args[0];
var password = args[1];

if (!username || !password) {
    console.log('Please provide username and password');
    console.log('Usage: mycli-auth <username> <password>');
    process.exit(1);
}

var request = require('request');
var options = {
    url: 'http://localhost:3000/api/auth',
    method: 'POST',
    json: {
        username: username,
        password: password
    }
}
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
);
