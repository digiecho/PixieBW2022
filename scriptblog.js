gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
gsap.config({ trialWarn: false });
// initail settings
circle = document.getElementById("blackpixie");
gsap.set("#lightgraypixie", {
  scale: 2,
  transformOrigin: "50% 50%",
  opacity: 0.5,
});
gsap.set("#darkgraypixie2", {
  scale: 2,
  transformOrigin: "50% 50%",
  opacity: 0.3,
  x: "-50%",
});
gsap.set("#darkgraypixie", {
  scale: 2,
  transformOrigin: "50% 50%",
  opacity: 0.3,
  x: "-50%",
});
gsap.set("#blackpixie", {
  scale: 0.5,
  transformOrigin: "50% 50%",
  // opacity: 0.5
});
gsap.set("#head1", {
  // scaleX:0.2,
  transformOrigin: "50% 50%",
  // transformOrigin: "50% 50%",
  // opacity: 0.5
  //    width: '100vw',
  // height: '100vh',
});

// Scrolling backdrop
//background moving
gsap.to("#blackpixie", {
  transformOrigin: "50% 50%",
  scale: 2,
  repeat: -1,
  yoyo: true,
  ease: "back",
  scrub: true,
  duration: 17.5,
});
gsap.to("#darkgraypixie", {
  transformOrigin: "50% 50%",
  x: "-50%",
  repeat: -1,
  yoyo: true,
  ease: "back",
  scrub: true,
  duration: 17.5,
});
gsap.to("#darkgraypixie2", {
  transformOrigin: "50% 50%",
  x: 5000,
  repeat: -1,
  yoyo: true,
  ease: "back",
  scrub: true,
  duration: 17.5,
  opacity: 0.3,
});

gsap.to("#lightgraypixie", {
  transformOrigin: "50% 50%",
  scale: 0.5,
  opacity: 0,
  repeat: -1,
  scrub: true,
  yoyo: true,
  ease: "back",
  end: " center top",
  duration: 17.5,
});
