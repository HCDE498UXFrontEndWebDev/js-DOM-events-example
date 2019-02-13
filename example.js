// This example will show you some of the ways you can manipulate the HTML a user sees using javascript

// To start, let's make a variable that references the "body" element in the HTML so we can start adding to it

let body = document.querySelector("body");

// Now, lets add something to it. Let's start with something simple, like a paragraph that says "My first new addition!"

let newParagraph = document.createElement("p");

newParagraph.textContent = " My newer paragraph";

body.appendChild(newParagraph);

// Okay, lets add something a bit more exciting, a boundless square!

// Start by making a "div" element and adding the a specific CSS rule to the div's classList

let boundlessSquare = document.createElement("div");

boundlessSquare.classList.add("boundlessSquare");

body.appendChild(boundlessSquare);

// Now, lets add a quote to the center of the square

let boundlessQuote = document.createElement("img");

boundlessQuote.setAttribute(
  "src",
  "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/98/2014/09/07214135/tagline-purple-hex.png"
);

boundlessQuote.classList.add("boundlessQuote");

boundlessSquare.appendChild(boundlessQuote);

// Now, lets add something special to make this quote truly boundless: rainbow coloring! We can make an event listener to be able to turn this on and off, depending on if it has been clicked.

boundlessSquare.addEventListener("click", () => {
  boundlessSquare.classList.toggle("color-change-5x");
  // boundlessSquare.classList.toggle("rotate-scale-up");
});

// Though this square is pretty boundless already, lets make it literally boundless using some Javascript from W3 schools (which a great reference for common web coding problems like this, you should check them out: https://www.w3schools.com/howto/howto_js_draggable.asp). There are better ways of doing drags with actual event listeners and specific protocol but this way is mostly for fun

dragElement(boundlessSquare);

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
