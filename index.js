window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  var Scrollerheight =
    document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY > Scrollerheight / 3) {
    if (!navbar.classList.contains("stickey_navbar")) {
      navbar.classList.add("stickey_navbar");
      console.log(Scrollerheight);
    }
  } else {
    navbar.classList.remove("stickey_navbar");
  }
});
function menubtn() {
  var menu = document.querySelector("header nav button .menu");
  var close = document.querySelector("header nav button .close");
  var navbar = document.querySelector("header");
  var tl = gsap.timeline();
  tl.to(navbar, {
    height: "45vh",
    duration: 0.5,
  });
  tl.pause();
  menu.addEventListener("click", function () {
    tl.play();
    menu.style.display = "none";
    close.style.display = "block";
  });
  close.addEventListener("click", function () {
    tl.reverse();
    close.style.display = "none";
    menu.style.display = "block";
  });
}
menubtn();

// page3 animations
gsap.registerPlugin(ScrollTrigger);

function applyWillChange(elements) {
  elements.forEach((element) => {
    document.querySelector(element).style.will_change = "transform, opacity";
  });
}

function page3_animation() {
  const page3ImgsLeft = [
    "#page3 .page3_cont .left img:first-child",
    "#page3 .page3_cont .left img:nth-child(2)",
  ];
  const page3ImgsRight = [
    "#page3 .page3_cont .left img:nth-child(3)",
    "#page3 .page3_cont .left img:nth-child(4)",
  ];

  // Apply will-change for performance boost
  applyWillChange([
    ...page3ImgsLeft,
    ...page3ImgsRight,
    "#page3 .page3_cont .right",
  ]);

  gsap.from(page3ImgsLeft, {
    x: "-100px",
    opacity: 0,
    duration: 0.8,
    stagger: 0.3, // Reduced stagger for performance
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page3 .page3_cont",
      start: "top 75%",
      end: "top 10%",
      once: true, // Run only once
    },
  });

  gsap.from(page3ImgsRight, {
    x: "300px",
    opacity: 0,
    duration: 0.8,
    stagger: 0.3, // Reduced stagger for performance
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page3 .page3_cont",
      start: "top 75%",
      end: "top 10%",
      once: true, // Run only once
    },
  });

  gsap.from("#page3 .page3_cont .right", {
    x: "200%",
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page3 .page3_cont",
      start: "top 75%",
      end: "top 10%",
      once: true, // Run only once
    },
  });
}
page3_animation();

function page2_animation() {
  applyWillChange(["#page2 .page2_cont"]);

  gsap.from("#page2 .page2_cont", {
    scale: 0,
    duration: 0.7,
    ease: "back.out(1.7)", // Use easing for smoother animation
    scrollTrigger: {
      trigger: "#page2 .page2_cont",
      start: "top 75%",
      once: true, // Run only once
    },
  });
}
page2_animation();

function page4_animation() {
  applyWillChange(["#page4 .page4_cont .card"]);

  gsap.from("#page4 .page4_cont .card", {
    y: "100%",
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4 .page4_cont",
      start: "top 50%",
      once: true, // Run only once
    },
  });
}
page4_animation();

function page6_animation() {
  applyWillChange(["#page6 .contact_us"]);

  gsap.from("#page6 .contact_us", {
    y: "100%",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page6",
      start: "top 50%",
      once: true, // Run only once
    },
  });
}
page6_animation();
