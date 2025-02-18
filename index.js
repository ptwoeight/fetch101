/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}


async function showList(elem, url) {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    elem.appendChild(li);
  });
}


function startShowingMessage(elem, url) {
  setInterval(async function() {
    const response = await fetch(url);
    const content = await response.text();
    elem.textContent = content;
  }, 1000);
}


async function handleError(elem, url) {  
  const response = await fetch(url);
  const content = await response.text();

  if (!response.ok) {
    elem.textContent = 'OH DEAR';
  } 
  else {
    elem.textContent = content;
  }
}


async function drawBox(canvas, url) {
  const canvasContext = canvas.getContext('2d');

  setInterval(async function() {
    const response = await fetch(url);
    const content = await response.json();

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(content.x, content.y, 10, 10);
  }, 1000);
}