const axios = require("axios");

axios
  .get("https://interns.bcgdvsydney.com/api/v1/key")
  .then(function(response) {
    console.log(response.data.key);
    const API_KEY = response.data.key;
    axios
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
