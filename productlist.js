// the endpoints: https://customiseme-2aec.restdb.io/rest/customiseme
// the API key: 622709f1dced170e8c83a044

const url = "https://customiseme-2aec.restdb.io/rest/customiseme";
const options = {
  headers: {
    "x-apikey": "622709f1dced170e8c83a044",
  },
};
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showSoaplist(data);
  });
function showSoaplist(data) {
  console.log(data);
  data.forEach(showSoap);
}
function showSoap(soap) {
  // grabbing the template
  const template = document.querySelector("#productlistTemplate").content;
  // copying the template
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = `${soap.images}`;
  copy.querySelector(".productname").textContent = `${soap.name}`;
  copy.querySelector("span").textContent = `${soap.price}`;
  copy.querySelector("a").setAttribute("href", `product.html?id=${soap._id}`);

  // grabing parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
