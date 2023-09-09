const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { slack_name, track } = parsedUrl.query;


    const currentDate = new Date();
    const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currentDate)

    const responseData = {
        slack_name,
        current_day: dayName,
        utc_time: currentDate.toISOString().split('.')[0] + 'Z',
        track,
        github_file_url: "https://github.com/fortune710/hng-task-1/blob/main/index.js",
        github_repo_url: "https://github.com/fortune710/hng-task-1",
        status: 200
    }


    res.writeHead(200, { "Content-Type": "application/json" })
    res.write(JSON.stringify(responseData))
    res.end()
})

server.listen(4000)