const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    let errMsg = null;
    let desc = null;

    if (error !== null) {
      errMsg = error;
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        errMsg = `Could not find breed named: ${breedName}`;
      } else {
        desc = data[0].description;
      }
    }

    callback(errMsg, desc);
  });
};

module.exports = fetchBreedDescription;
