document.addEventListener("DOMContentLoaded", function() {

  displayFooterLastModify();
  menuToggle();
  
});


function displayFooterLastModify() {
  const year = new Date().getFullYear();
  document.querySelector("#currentyear").textContent = year;

  const lastModify = new Date(document.lastModified);
  document.querySelector("#lastmodify").textContent = lastModify.toLocaleDateString();
}

function menuToggle(){
  const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
}

