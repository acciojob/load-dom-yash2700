// Function to execute when the DOM is loaded
function onDOMLoad() {
  var paragraph = document.createElement("p");
  
  paragraph.textContent = "DOM load success";
  
  document.body.appendChild(paragraph);
}

document.addEventListener("DOMContentLoaded", onDOMLoad);
