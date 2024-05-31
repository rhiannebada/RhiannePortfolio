gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
        let video = section.querySelector(".video");

        let nextSection = sections[index + 1];
        let endScalePoint = nextSection ? `top+=${nextSection.offsetTop - section.offsetTop} top` : `+=${section.offsetHeight}`;

        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: endScalePoint,
                pin: true,
                pinSpacing: false,
                scrub: 1,
            },
        });

        gsap.fromTo(
            video, 
            {scale: 1}, 
            {
                scale: 0.5,
                ease: "none",
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