gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("MorphSVGPlugin", MorphSVGPlugin);
gsap.config({ trialWarn: false });

bighead = document.getElementById("bighead");
bigheadMobile = document.getElementById("bigheadMobile");

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function () {
    // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
    // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    gsap.set(bigheadMobile, { visibility: "hidden" });
    gsap.to(
      bighead,
      {
        morphSVG: "#rectangle",
        // duration: 1,
        immediateRender: false,
        type: "rotational",
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#v-spacer-1",
          // markers: true,
          scrub: true,
          start: "top top",
          // end: "bottom center",
        },
      },
      "+=1"
    );
    gsap.fromTo(
      bighead,
      {
        morphSVG: "#rectangle",
      },
      {
        morphSVG: "#head2",
        // duration: 1,
        immediateRender: false,
        type: "rotational",
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#v-spacer-2",

          scrub: true,
          start: "top top",
          // end: "bottom center",
        },
      },
      "+=1"
    );
    gsap.fromTo(
      bighead,
      {
        morphSVG: "#head2",
      },
      {
        morphSVG: "#body1",
        // duration: 1,
        immediateRender: false,
        type: "rotational",
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#v-spacer-3",

          scrub: true,
          start: "top top",
          // end: "bottom center",
        },
      },
      "+=1"
    );
    gsap.fromTo(
      bighead,
      {
        morphSVG: "#body1",
      },
      {
        morphSVG: "#body2",
        // duration: 1,
        immediateRender: false,
        type: "rotational",
        ease: "expo.out",

        scrollTrigger: {
          trigger: "#v-spacer-4",
          scrub: true,
          start: "top top",
          // end: "bottom center",
        },
      },
      "+=1"
    );
  },

  // mobile
  "(max-width: 799px)": function () {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
    gsap.set(bighead, { visibility: "hidden" });
    gsap.to(
      bigheadMobile,
      {
        morphSVG: "#rectangleMobile",
        duration: 1,
        immediateRender: false,
        ease: "expo.out",
        type: "rotational",
        scrollTrigger: {
          trigger: "#v-spacer-1",
          // markers: true,
          scrub: 1,
          start: "top top",
          end: "bottom center",
          // scale: 0.2,
        },
      },
      "+=1"
    );
    gsap.fromTo(
      bigheadMobile,
      {
        morphSVG: "#rectangleMobile",
      },
      {
        morphSVG: "#head2Mobile",
        duration: 1,
        immediateRender: false,
        ease: "expo.out",
        type: "rotational",

        scrollTrigger: {
          trigger: "#v-spacer-2",

          scrub: 1,
          start: "top top",
          end: "bottom center",
        },
      },
      "+=1"
    );
    gsap.fromTo(
      bigheadMobile,
      {
        morphSVG: "#head2Mobile",
      },
      {
        morphSVG: "#body1Mobile",
        duration: 1,
        immediateRender: false,
        type: "rotational",
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#v-spacer-3",

          scrub: 1,
          start: "top top",
          end: "bottom center",
        },
      },
      "+=1"
    );
    gsap.fromTo(
      bigheadMobile,
      {
        morphSVG: "#body1Mobile",
      },
      {
        morphSVG: "#rectangleMobile",
        duration: 1,
        immediateRender: false,
        type: "rotational",
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#v-spacer-4",

          scrub: 1,
          start: "top top",
          end: "bottom center",
        },
      },
      "+=1"
    );
  },

  // all
  all: function () {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
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
    });

    // gsap.to("#bighead", {
    //   // scrollTrigger: "#v-spacer-1",
    //   transformOrigin: "50% 50%",
    //   scale: 1.5,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "back",
    //   // scrub: true,
    //   duration: 17.5,
    // });
    gsap.to("#darkgraypixie2", {
      transformOrigin: "50% 50%",
      x: "-50%",
      repeat: -1,
      yoyo: true,
      ease: "back",
      // scrub: true,
      duration: 17.5,
    });
    gsap.to("#darkgraypixie2", {
      scrollTrigger: "#v-spacer-3",
      transformOrigin: "50% 50%",
      x: 5000,
      repeat: -1,
      yoyo: true,
      ease: "back",
      // scrub: true,
      duration: 17.5,
      opacity: 0.3,
    });

    gsap.to("#lightgraypixie", {
      scrollTrigger: "#v-spacer-1",
      transformOrigin: "50% 50%",
      scale: 0.5,
      opacity: 0,
      repeat: -1,
      // scrub: true,
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

    var tl = new TimelineMax({ repeat: -1 });
    tl.to(".clouds", 300, {
      backgroundPosition: "10000px 0",
      ease: Linear.easeNone,
    });

    // var tl2 = new TimelineMax({ repeat: -1 });
    // tl2.to(".twinkling", 300, {
    //   backgroundPosition: "0 10000%",
    //   ease: Linear.easeNone,
    // });
    gsap.to(".twinkling", {
      backgroundPosition: "0% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#v-spacer-2",
        // start: "top",
        end: +15000,
        scrub: 0.5,
      },
    });

    // let tween = gsap.fromTo(".move-clouds-back", { backgroundPosition:" 0 0"}, {backgroundPosition: "10000px 0", duration:200});
  },
});

//oldversion

// initail settings
// circle = document.getElementById("blackpixie");
// gsap.set("#lightgraypixie", {
//   scale: 2,
//   transformOrigin: "50% 50%",
//   opacity: 0.5,
// });
// gsap.set("#darkgraypixie2", {
//   scale: 2,
//   transformOrigin: "50% 50%",
//   opacity: 0.3,
//   x: "-50%",
// });
// gsap.set("#darkgraypixie", {
//   scale: 2,
//   transformOrigin: "50% 50%",
//   opacity: 0.3,
//   x: "-50%",
// });
// gsap.set("#blackpixie", {
//   scale: 0.5,
//   transformOrigin: "50% 50%",
//   // opacity: 0.5
// });
// gsap.set("#head1", {
//   transformOrigin: "50% 50%",
// });
// gsap.set("#PageButton", {
//   transformOrigin: "50% 50%",
//   opacity: 1,
// });
// gsap.to("#PageButton, .logotext", {
//   scrollTrigger: {
//     trigger: "#v-spacer-1",
//     // markers: true,
//     scrub: true,
//     start: "top top",
//     end: "200px",
//   },
//   opacity: 0,
// });

// // Scrolling backdrop
// //background moving
// gsap.to("#blackpixie", {
//   // scrollTrigger: "#v-spacer-1",
//   transformOrigin: "50% 50%",
//   scale: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "back",
//   // scrub: true,
//   duration: 17.5,
// });
// gsap.to("#darkgraypixie", {
//   scrollTrigger: "#v-spacer-1",
//   transformOrigin: "50% 50%",
//   x: "-50%",
//   repeat: -1,
//   yoyo: true,
//   ease: "back",
//   // scrub: true,
//   duration: 17.5,
// });
// gsap.to("#darkgraypixie2", {
//   scrollTrigger: "#v-spacer-3",
//   transformOrigin: "50% 50%",
//   x: 5000,
//   repeat: -1,
//   yoyo: true,
//   ease: "back",
//   // scrub: true,
//   duration: 17.5,
//   opacity: 0.3,
// });

// gsap.to("#lightgraypixie", {
//   scrollTrigger: "#v-spacer-1",
//   transformOrigin: "50% 50%",
//   scale: 0.5,
//   opacity: 0,
//   repeat: -1,
//   // scrub: true,
//   yoyo: true,
//   ease: "back",
//   end: " center top",
//   duration: 17.5,
// });

// //make light gray fairy disapear on scroll
// gsap.to("#lightgraypixie", {
//   scrollTrigger: {
//     trigger: "#v-spacer-1",
//     // markers: true,
//     // scrub: true,
//     start: "top top",
//   },
//   x: -5000,
// });

//scroll morphing timeline..................................................

// gsap.to(
//   circle,
//   {
//     morphSVG: "#body1",
//     type: "rotational",
//     duration: 1,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: "#v-spacer-1",
//       // markers: true,
//       // scrub: true,
//       start: "top top",
//       end: "bottom top",
//     },
//   },
//   "+=1"
// );
// gsap.fromTo(
//   circle,
//   {
//     morphSVG: "#body1",
//   },
//   {
//     morphSVG: "#darkgraypixie2",
//     type: "rotational",

//     duration: 1,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: "#v-spacer-2",
//       // markers: true,
//       // scrub: true,
//       start: "top top",
//     },
//   },
//   "+=1"
// );
// gsap.fromTo(
//   circle,
//   {
//     morphSVG: "#darkgraypixie2",
//   },
//   {
//     morphSVG: "#body2",
//     type: "rotational",

//     duration: 1,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: "#v-spacer-3",
//       // markers: true,
//       // scrub: true,
//       start: "top top",
//     },
//   },
//   "+=1"
// );
// gsap.fromTo(
//   circle,
//   {
//     morphSVG: "#body2",
//   },
//   {
//     morphSVG: "#head1",
//     type: "rotational",

//     duration: 1,
//     immediateRender: false,
//     scrollTrigger: {
//       trigger: "#v-spacer-4",
//       // markers: true,
//       // scrub: true,
//       start: "top top",
//     },
//   },
//   "+=1"
// );

// //scroll triggers with both onLeave and onLeave callback to trigger animations depending on scroll direction
// ScrollTrigger.create({
//   trigger: "#v-spacer-1",
//   start: "center top",
//   end: "bottom top",
//   onLeave: gsap.to(
//     circle,
//     {
//       morphSVG: "#body1",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
//   onLeaveBack: gsap.to(
//     "#body1",
//     {
//       morphSVG: circle,
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
// });

// ScrollTrigger.create({
//   trigger: "#v-spacer-2",
//   start: "center top",
//   end: "bottom top",
//   onLeave: gsap.fromTo(
//     circle,
//     {
//       morphSVG: "#body1",
//     },
//     {
//       morphSVG: "#darkgraypixie2",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
//   onLeaveBack: gsap.fromTo(
//     circle,
//     {
//       morphSVG: "#darkgraypixie2",
//     },
//     {
//       morphSVG: "#body1",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
// });
// ScrollTrigger.create({
//   trigger: "#v-spacer-3",
//   start: "center top",
//   end: "bottom top",
//   onLeave: gsap.fromTo(
//     circle,
//     {
//       morphSVG: "#darkgraypixie2",
//     },
//     {
//       morphSVG: "#body2",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
//   onLeaveBack: gsap.fromTo(
//     circle,
//     {
//       morphSVG: "#body2",
//     },
//     {
//       morphSVG: "#darkgraypixie2",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
// });
// ScrollTrigger.create({
//   trigger: "#v-spacer-4",
//   start: "top top",
//   end: "bottom center",
//   onLeave: gsap.fromTo(
//     circle,
//     {
//       morphSVG: "#body2",
//     },
//     {
//       morphSVG: "#head1",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
//   onLeaveBack: gsap.fromTo(
//     circle,
//     {
//       morphSVG: "#head1",
//     },
//     {
//       morphSVG: "#body2",
//       type: "rotational",
//       duration: 1,
//       immediateRender: false,
//     },
//     "+=1"
//   ),
// });
