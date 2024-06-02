// works page
// select menu element
const $menu = document.querySelector('.menu');
// select all menu items
const $items = document.querySelectorAll('.menu--item');
let menuHeight = $menu.clientHeight;
let itemHeight = $items[0].clientHeight;
let wrapHeight = $items.length * itemHeight; // calcuate total height of all menu items

// initial scroll speed and positions
let scrollSpeed = 0;
let oldScrollY = 0;
let scrollY = 0;
let y = 0;

// linear interpolation function to smooth out transitions
const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};

// set position of menu items
const dispose = scroll => {
  gsap.set($items, {
    y: i => {
      return i * itemHeight + scroll;
    },
    modifiers: {
      y: y => {
        // wrap y value within heigh range to create infinite loop effect
        const s = gsap.utils.wrap(-itemHeight, wrapHeight - itemHeight, parseInt(y));
        return `${s}px`;
      } } });

// initial call to position items
};
dispose(0);

// handle mouse wheel events to update scroll position
const handleMouseWheel = e => {
  scrollY -= e.deltaY;
};

// variables for touch interactions
let touchStart = 0;
let touchY = 0;
let isDragging = false;
const handleTouchStart = e => {
  touchStart = e.clientY || e.touches[0].clientY;
  isDragging = true;
  $menu.classList.add('is-dragging');
};
// touch move events
const handleTouchMove = e => {
  if (!isDragging) return;
  touchY = e.clientY || e.touches[0].clientY;
  scrollY += (touchY - touchStart) * 2.5;
  touchStart = touchY;
};
// touch and events
const handleTouchEnd = () => {
  isDragging = false;
  $menu.classList.remove('is-dragging');
};

// add event listeners for mouse wheel and touch events
$menu.addEventListener('mousewheel', handleMouseWheel);
$menu.addEventListener('touchstart', handleTouchStart);
$menu.addEventListener('touchmove', handleTouchMove);
$menu.addEventListener('touchend', handleTouchEnd);
$menu.addEventListener('mousedown', handleTouchStart);
$menu.addEventListener('mousemove', handleTouchMove);
$menu.addEventListener('mouseleave', handleTouchEnd);
$menu.addEventListener('mouseup', handleTouchEnd);
$menu.addEventListener('selectstart', () => {return false;}); // prevent text selection

// window resize events to update dimensions
window.addEventListener('resize', () => {
  menuHeight = $menu.clientHeight;
  itemHeight = $items[0].clientHeight;
  wrapHeight = $items.length * itemHeight;
});

// main render loop
const render = () => { // call render on the next frame
  requestAnimationFrame(render); // smoothly interpolate y to scrollY
  y = lerp(y, scrollY, .1); // update positions of menu items
  dispose(y);

  scrollSpeed = y - oldScrollY; // calculate scroll speed
  oldScrollY = y; // update old scroll position

  // animate scale and rotation of menu items based on scroll speed
  gsap.to($items, {
    scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * .005,
    rotate: scrollSpeed * 0.2 });

};
render(); // initial call to render