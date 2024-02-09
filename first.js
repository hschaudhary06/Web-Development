
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// circle mouse follower
function circleMouseFollower(){
    window.addEventListener("mousemove",function (dets) {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}
circleMouseFollower()

//animation text

function firstPageTextAnimation(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10px',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        stagger: .2
    })
}

firstPageTextAnimation()
