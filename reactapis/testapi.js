const fetch = require("node-fetch");
fetch('http://localhost:8888/drupal8/jsonapi/node/article')
.then(response => response.json())
.then(data => {
  console.log(JSON.stringify(data)) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))