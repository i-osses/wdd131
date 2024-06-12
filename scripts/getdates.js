
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




