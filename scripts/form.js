document.addEventListener("DOMContentLoaded", function() {
  displayFooterLastModify();
  productReview();
});

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function productReview(){
  const productNameSelect = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
  });

  if (localStorage.getItem("reviewCount") === null) {
    localStorage.setItem("reviewCount", "0");
  }

  const reviewForm = document.querySelector("form");
  reviewForm.addEventListener("submit", function() {
    let reviewCount = parseInt(localStorage.getItem("reviewCount"));
    localStorage.setItem("reviewCount", (reviewCount + 1).toString());
  });

}

function displayFooterLastModify() {
  const year = new Date().getFullYear();
  document.querySelector("#currentyear").textContent = year;

  const lastModify = new Date(document.lastModified);
  document.querySelector("#lastmodify").textContent = lastModify.toLocaleDateString();
}

document.addEventListener("DOMContentLoaded", function() {
  const reviewCount = localStorage.getItem("reviewCount");
  document.getElementById("reviewCount").textContent = reviewCount;
});
