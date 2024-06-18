const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
  const chapter = input.value;

  if (chapter.trim() === ""){
    alert("The value is empty");
    input.value = "";
    input.focus();
  } else {
    const li = document.createElement("li");
    li.textContent = chapter;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", function() {
      list.removeChild(li);
      input.focus();
    });

    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();
  }
});