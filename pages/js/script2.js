//navigation
// add an event listener to the element with id 'menu-icon' for the 'click' event
document.getElementById('menu-icon').addEventListener('click', function() {
    // toggle active class on the element with id nav-left
    document.getElementById('nav-left').classList.toggle('active');
    // toggle active class on the element with id nav-left
    document.getElementById('nav-right').classList.toggle('active');
});
