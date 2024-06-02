// background color change

document.addEventListener("DOMContentLoaded", function() {
    // define mappings between image sources and background colors
    const imageColorMap = {
        'images/m15.JPG': '#573e2b', // map the image source to a specific color
        'images/m16.JPG': '#573e2b', 
        'images/m17.JPG': '#573e2b',
        'images/m19.JPG': '#573e2b',

        'images/m20.JPG': '#e0b12d', // map another image to another color
        'images/m21.JPG': '#e0b12d',
        'images/m23.JPG': '#e0b12d',
        'images/m24.JPG': '#e0b12d',

        'images/m1.JPG': '#244254',
        'images/m3.JPG': '#244254',
        'images/m4.JPG': '#244254',
        'images/m6.JPG': '#244254',
        'images/m7.JPG': '#244254',
        'images/m11.JPG': '#244254',
        'images/m12.JPG': '#244254',
        'images/m13.JPG': '#244254',
    };

    // get all specific image elements
    const specificImages = document.querySelectorAll('.specific-image'); 
    
    // add event listeners for each specific image
    specificImages.forEach(function(image) {
        // add event listener for mouseenter
        image.addEventListener('mouseenter', function() {
            // get the corresponding color from the image color map
            const color = imageColorMap[image.getAttribute('src')];
            // change the body background color
            document.body.style.backgroundColor = color;
        });

        // add event listener for mouseleave
        image.addEventListener('mouseleave', function() {
            // reset the body background color to default
            document.body.style.backgroundColor = '';
        });
    });
});
