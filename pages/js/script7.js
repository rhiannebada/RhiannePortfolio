// register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    // select all elemnts with class pinned
    const pinnedSections = gsap.utils.toArray(".pinned");

    // iterate over each pinned section
    pinnedSections.forEach((section, index, sections) => {
        // select the video element within the current section
        let video = section.querySelector(".video");

        // determine the next section
        let nextSection = sections[index + 1];
        // calculate end point for scalling animation
        let endScalePoint = nextSection ? `top+=${nextSection.offsetTop - section.offsetTop} top` : `+=${section.offsetHeight}`;

        // pin the current section and set up scroll-triggered animation
        gsap.to(section, {
            scrollTrigger: { 
                trigger: section, // triggers the animation
                start: "top top", // start animation when top of section hits top of viewport
                end: endScalePoint, // end animation when next section's top aligns or section height is scrolled
                pin: true, // pin the section in place during the animation
                pinSpacing: false, // do not add extra spacing for the pinned element
                scrub: 1, // smoothly animate based on scroll position
            },
        });

        // animate the scaling of the video within the section
        gsap.fromTo(
            video, 
            {scale: 1}, // start scale of the video
            {
                scale: 0.5, // end scale of the video
                ease: "none", // linear animation, no easing function
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: endScalePoint,
                    scrub: 1,
                },
            }
        );
    });
});