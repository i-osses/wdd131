
document.addEventListener("DOMContentLoaded", function(){
  const year = new Date().getFullYear();
  const currentYearSpan = document.querySelector("#currentyear");
  
  currentYearSpan.textContent= year;
});

document.addEventListener("DOMContentLoaded", function(){

  const lastModify = new Date(document.lastModified);

  const lastModifyDate = lastModify.toLocaleString();
  
  const lastModifySpan = document.querySelector("#lastmodify");

  lastModifySpan.textContent = lastModifyDate;
});


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
