const request = require('request');

const args = process.argv;
const newArgs = args.slice(2);
let breed = newArgs[0];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  if (error !== null) {
    console.log("Error contacting API service");
    return;
  }
  
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`Could not find breed named: ${breed}`);
    return;
  }

  console.log(data[0].description);
});
