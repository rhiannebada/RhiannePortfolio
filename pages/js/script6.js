//cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

//following cursor
const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
document.body.appendChild(follower);

document.addEventListener('mousemove', (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    const mouseX = e.clientX + scrollX;
    const mouseY = e.clientY + scrollY;

    element.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
