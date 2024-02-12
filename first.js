
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// circle mouse follower
function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {

        var isMouseWithinPage = dets.clientX >= 0 && dets.clientX <= window.innerWidth &&
            dets.clientY >= 0 && dets.clientY <= window.innerHeight;
        
        // Output result
        if (isMouseWithinPage) {
            document.querySelector('#minicircle').style.opacity = 1;
        } else {
            document.querySelector('#minicircle').style.opacity = 0;
        }
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}
circleMouseFollower()

function handleMouseEnter() {
    document.querySelector('#minicircle').style.opacity = 1;
}

// Function to handle mouse leave event
function handleMouseLeave() {
    document.querySelector('#minicircle').style.opacity = 0;
}

// Add event listener for mouse enter
document.addEventListener('mouseenter', handleMouseEnter);

// Add event listener for mouse leave
document.addEventListener('mouseleave', handleMouseLeave);

//animation text

function firstPageTextAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10px',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            duration: 1,
            ease: Expo.easeInOut,
            stagger: .2
        })
}

firstPageTextAnimation()
