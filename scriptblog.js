gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("MorphSVGPlugin", MorphSVGPlugin);
gsap.config({ trialWarn: false });
// initail settings
circle = document.getElementById("blackpixie");
var tl = new TimelineMax({ repeat: -1 });
tl.to(".clouds", 300, {
  backgroundPosition: "10000px 0",
  ease: Linear.easeNone,
});
gsap.set("#lightgraypixie", {
  scale: 2,
  transformOrigin: "50% 50%",
  opacity: 0.5,
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
});
gsap.set("#head1", {
  transformOrigin: "50% 50%",
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
