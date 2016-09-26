//Problem: We need a simple way to look at a users badge count and JavaScript points from a web browser.
//Solution: Use Node.js to perform the profile look ups and serve our template vig HTTP.

//1. Create a web server.
const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
	response.write("This is before the end.\n");
  response.end('Hello World\n');
	response.write("This is after the end.\n");
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//2. Handle HTTP route GET / and Post / i.e. Home
  //if url == "/" && GET
    //show search field
  //if url == "/" && POST
    //redirect to /:username

//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error

//4. Function that handles the reading of files and merge in values.
  //read from file and get a string
    //merge values in to string


