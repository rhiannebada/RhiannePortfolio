//background changing
document.addEventListener("DOMContentLoaded", function() {
    // Define mappings between images and colors
    const imageColorMap = {
        'images/m15.JPG': '#573e2b', // Map image to color (adjust as needed)
        'images/m16.JPG': '#573e2b', // Map another image to another color
        'images/m17.JPG': '#573e2b',
        'images/m19.JPG': '#573e2b',

        'images/m20.JPG': '#e0b12d',
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

    // Get all specific image elements
    const specificImages = document.querySelectorAll('.specific-image'); 
    
    // Add event listeners for each specific image
    specificImages.forEach(function(image) {
        // Add event listener for mouseenter
        image.addEventListener('mouseenter', function() {
            // Get the corresponding color from the map
            const color = imageColorMap[image.getAttribute('src')];
            // Change the body background color
            document.body.style.backgroundColor = color;
        });

        // Add event listener for mouseleave
        image.addEventListener('mouseleave', function() {
            // Reset the body background color
            document.body.style.backgroundColor = '';
        });
    });
});
