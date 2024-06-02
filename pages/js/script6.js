// custom cursor
// main cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// following cursor element (smaller circle)
const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
document.body.appendChild(follower);

// add event listener to track mouse movements
document.addEventListener('mousemove', (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

// function to set the position of cursor elements
function setPosition(element, e) {
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // calculate mouse X and mouse Y position including scroll offset
    const mouseX = e.clientX + scrollX;
    const mouseY = e.clientY + scrollY;

    // update element's transform style to move it to the mouse position
    element.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
