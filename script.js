gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("MorphSVGPlugin", MorphSVGPlugin);
gsap.config({ trialWarn: false });

bighead = document.getElementById("bighead");
bigheadMobile = document.getElementById("bigheadMobile");
CSSPlugin.defaultForce3D = true;
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
      scale: 2.01,
      transformOrigin: "50% 50%",
      opacity: 0.5,
    });

    gsap.set("#darkgraypixie", {
      scale: 2.01,
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

    gsap.to("#lightgraypixie", {
      scrollTrigger: "#v-spacer-1",
      transformOrigin: "50% 50%",
      scale: 0.51,
      opacity: 0,
      repeat: -1,
      // scrub: true,
      yoyo: true,
      ease: "back",
      start: "top top",
      end: "center top",
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

    var tl2 = new TimelineMax({ repeat: -1 });
    tl2.to(".twinkling", 200, {
      webkitMaskPosition: "0 10000px",
      ease: Linear.easeNone,
    });
    gsap.to(".twinkling", {
      backgroundPosition: "0% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#v-spacer-2",
        // start: "top",
        end: +30000,
        scrub: 0.5,
      },
    });

    // var tl = new TimelineMax({ repeat: -1 });
    tl.to(".particle-1", 60, {
      y: "-2560px",
      ease: Linear.easeNone,
    });
    tl.to(".particle-2", 120, {
      y: "-2560px",
      ease: Linear.easeNone,
    });
    tl.to(".particle-3", 180, {
      y: "-2560px",
      ease: Linear.easeNone,
    });
    tl.to(".particle-4", 600, {
      y: "-2560px",
      ease: Linear.easeNone,
    });
  },
});
