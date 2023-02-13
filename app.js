// set up express object
const express = require('express')
const app = express()
const port = 3000

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
// var cors = require('cors');
// app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// serve static assets from the 'public' directory
app.use(express.static('public'))

// serve HTML homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set up API endpoint
app.get("/api/whoami", function (req, res) {
    console.log(req.headers);
    // Declare variables from headers object items
    var software = req.headers['user-agent'];
    var language = req.headers['accept-language'];
    var ip = "123.456.7.8, 2001:db8:85a3:8d3:1319:8a2e:370:7348"; //req.headers['x-forwarded-for'];

    // Shorten the ip address
    ip = ip.slice(0, ip.indexOf(","));

    // return the items as json
    res.json({ ipaddress: ip, language: language, software: software });
});

// listen on port 3000 for requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})