const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { slack_name, track } = parsedUrl.query;


    const currentDate = new Date();
    const dayName = currentDate.toDateString();

    const responseData = {
        slack_name,
        current_day: "Saturday", //Change this
        utc_time: currentDate.toISOString(),
        track,
        status: 200
    }

    console.log(req.method, req.url)


    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(responseData))
    res.end()
})

server.listen(4000)