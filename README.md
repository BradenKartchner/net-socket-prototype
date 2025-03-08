# net-socket-prototype

Messing around with web sockets for learning and fun

## Resources

https://beej.us/guide/bgnet/
https://beej.us/blog/data/websockets/

## Knowledge

### Testing with `curl`

curl -D - http://localhost:<port>

### Creating a web server in NodeJS

Basic approach:

1. Listen for incoming connections
2. When one arrives, examine it to determine the file requested
3. If file doesn't exist, return 404
4. (Bonus) if the file is a directory, add /index.html to the end to see if that file exists
5. If file exists, look at extension to determine it's MIME type for response (text/html, application/javascript, etc)
6. Read file into memory
7. Write 200 (success) response header with the proper MIME type and write the file into response
8. Send response
9. Return to step 1 and keep listening
