// import Node HTTP module
import { createServer } from "http";
import * as url from "node:url";

// function to handle file name requests
function onGotFilename(err, filename) {}

function httpHandler(request, response) {
    // Extract path/filename from request URL
    // console.log(request);
    let reqUrl = request.url;
    console.log("request url: ", reqUrl);

    // basic response to satisfy web browser, will delete later
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World!\n");
}

// listen for requests on desired port
try {
    createServer(httpHandler).listen(3490, () => {
        console.log("Server running on port 3490");
    });
} catch (e) {
    console.log(e);
}
