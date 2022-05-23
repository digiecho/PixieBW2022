gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("MorphSVGPlugin", MorphSVGPlugin);
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
gsap.set("#PageButton", {
  transformOrigin: "50% 50%",
  opacity: 1,
});
gsap.to("#PageButton, .logotext", {
  scrollTrigger: {
    trigger: "#v-spacer-1",
    // markers: true,
    scrub: true,
    start: "top top",
    end: "200px",
  },
  opacity: 0,

  // yoyo: true,
  // ease: "back",
  // duration: 1,
});

// Scrolling backdrop
//background moving
gsap.to("#blackpixie", {
  scrollTrigger: "#v-spacer-1",
  transformOrigin: "50% 50%",
  scale: 2,
  repeat: -1,
  yoyo: true,
  ease: "back",
  scrub: true,
  duration: 17.5,
});
gsap.to("#darkgraypixie", {
  scrollTrigger: "#v-spacer-1",
  transformOrigin: "50% 50%",
  x: "-50%",
  repeat: -1,
  yoyo: true,
  ease: "back",
  scrub: true,
  duration: 17.5,
});
gsap.to("#darkgraypixie2", {
  scrollTrigger: "#v-spacer-3",
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
  scrollTrigger: "#v-spacer-1",
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

//make light gray fairy disapear on scroll
gsap.to("#lightgraypixie", {
  scrollTrigger: {
    trigger: "#v-spacer-1",
    // markers: true,
    scrub: true,
    start: "top top",
  },
  x: -5000,
});

//scroll morphing timeline..................................................

gsap.to(
  circle,
  {
    morphSVG: "#body1",
    type: "rotational",

    duration: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#v-spacer-1",
      // markers: true,
      scrub: true,
      start: "top top",
      end: "bottom top",
    },
  },
  "+=1"
);
gsap.fromTo(
  circle,
  {
    morphSVG: "#body1",
  },
  {
    morphSVG: "#darkgraypixie2",
    type: "rotational",

    duration: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#v-spacer-2",
      // markers: true,
      scrub: true,
      start: "top top",
    },
  },
  "+=1"
);
gsap.fromTo(
  circle,
  {
    morphSVG: "#darkgraypixie2",
  },
  {
    morphSVG: "#body2",
    type: "rotational",

    duration: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#v-spacer-3",
      // markers: true,
      scrub: true,
      start: "top top",
    },
  },
  "+=1"
);
gsap.fromTo(
  circle,
  {
    morphSVG: "#body2",
  },
  {
    morphSVG: "#head1",
    type: "rotational",

    duration: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: "#v-spacer-4",
      // markers: true,
      scrub: true,
      start: "top top",
    },
  },
  "+=1"
);

// //scroll triggers with both onLeave and onLeave callback to trigger animations depending on scroll direction
// ScrollTrigger.create({
//   trigger: "#v-spacer-1",
//   start: "top top",
//   end: "+=500",
//   onLeave: tohead2,
//   onLeaveBack: toblackpixie
// });
// ScrollTrigger.create({
//   trigger: "#v-spacer-2",
//   start: "top top",
//   end: "bottom center",
//   onLeave: tohead1,
//   onLeaveBack: tohead2,
// });
// ScrollTrigger.create({
//   trigger: "#v-spacer-3",
//   start: "top top",
//   end: "bottom center",
//   onLeave: torectangle,
//   onLeaveBack: tohead1,
// });
// ScrollTrigger.create({
//   trigger: "#v-spacer-4",
//   start: "top top",
//   end: "bottom center",
//   onLeave:tobody1,
//   onLeaveBack:torectangle,
// });
