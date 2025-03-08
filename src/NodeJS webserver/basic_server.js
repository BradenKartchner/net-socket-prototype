// import Node HTTP module
import { createServer } from "http";

function httpHandler(request, response) {
    // this gets called for each web request
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World!\n");
}

// listen for requests on desired port
createServer(httpHandler).listen(3490, () => {
    console.log("Server running on port 3490");
});
