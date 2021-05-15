// Your code goes here


let textToChange = document.querySelector("#text")

document.addEventListener("DOMContentLoaded",changeTextEventListener);

function changeTextEventListener() {
  textToChange.innerHTML = "This is really cool!"
}

console.log("This works" );
