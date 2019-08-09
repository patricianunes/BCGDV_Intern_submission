const axios = require("axios");

axios
  //Get an API Key
  .get("https://interns.bcgdvsydney.com/api/v1/key")
  .then(function(response) {
    console.log(response.data.key);
    const API_KEY = response.data.key;
    axios
      //POST request with your name and email address
      .post(`https://interns.bcgdvsydney.com/api/v1/submit?apiKey=${API_KEY}`, {
        name: "Patrica Nunes",
        email: "patricia@krint.io"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
