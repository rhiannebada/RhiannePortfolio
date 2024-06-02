// gallery
document.addEventListener("DOMContentLoaded", () => {
    // select all gallery items
    const items = document.querySelectorAll('.gallery-item');

    // create IntersectionObserver to track visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // if entry is intersecting with the viewport...
            if (entry.isIntersecting) {
                // add visible class when item is in view
                entry.target.classList.add('visible');
            } else {
                // remove visible class when item is out of view
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // trigger when 10% of item is visible
    });

    // observe each gallery item
    items.forEach(item => {
        observer.observe(item);
    });
});

$('.tile')
    // tile mouse actions
    // when mouse is over tile...
    .on('mouseover', function(){
        // scale up the child element with class photo with class photo
        $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    // when mouse leaves tile...
    .on('mouseout', function(){
        //reset scale of the child element with class photo
        $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    //when mouse moves over tile...
    .on('mousemove', function(e){
        $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
        // append child elements for photo and text
        $(this)
            // add a photo container
            .append('<div class="photo"></div>')
            // text just to show zoom level on current item
            .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
            // set background image for each tile
            .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    });