var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pg-two",
        start: "0% 95%",
        end: "40% 50%",
        // markers: true,
        scrub: true,
    }
})
tl.to(".pg-one #fanta",{
    x: "-69%",
    y: "140%",
    ease: Power1.easeOut,
},'saath')
tl.to(".pg-one #slice",{
    x: "-69%",
    y: "440%",
    ease: Power1.easeOut,
}, "saath");

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".pg-three",
        start: "0% 95%",
        end: "40% 50%",
        scrub: true,
        // markers:true,
    }
})
tl2.from(".pg-three .card #img-1", {
    rotate: "-50deg",
    x: -220,
    ease: Power1.easeOut,
}, "together")
tl2.from(".pg-three .card #img-3", {
    rotate: "50deg",
    x: 220,
    ease: Power1.easeOut,
}, "together")