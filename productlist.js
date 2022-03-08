// the endpoints: https://customiseme-2aec.restdb.io/rest/customiseme
// the API key: 622709f1dced170e8c83a044

const url = "https://customiseme-2aec.restdb.io/rest/customiseme";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showProductlist(data);
  });
function showProductlist(data) {}
