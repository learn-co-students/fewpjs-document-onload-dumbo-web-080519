// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  let par = document.querySelector("#text");
  changeParagraphText(par);
});

function changeParagraphText(par) {
  par.textContent = "This is really cool!"
}
