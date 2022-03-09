const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://customiseme-2aec.restdb.io/rest/customiseme/${id}`;

//API-KEY
const options = {
  headers: {
    "x-apikey": "622709f1dced170e8c83a044",
  },
};

//fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showSoap(data));

//populate the page
function showSoap(soap) {
  console.log(soap);
  document.querySelector(".soapname").textContent = soap.name;
  document.querySelector(".price").textContent = soap.price;
  document.querySelector(".soapcontainer img").src = soap.images;
  document.querySelector(".color").textContent = soap.color;
  document.querySelector(".weight").textContent = soap.weight;
  document.querySelector(".availability").textContent = soap.availablity;
  document.querySelector(".ingredients").textContent = soap.ingredients;
  document.querySelector(".essential").textContent = soap.essentialoils;
}
