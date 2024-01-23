let links = document.querySelectorAll("header a");
let toTop = document.getElementById("to-top");
let leadDown = document.getElementById("lead-down").querySelector("span");
let timeline = document.querySelectorAll("#experience-timeline");
let mobileMenuOpen = document.getElementById("mobile-menu-open");
let mobileMenuClose = document.getElementById("mobile-menu-close");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Treat as normal link if no-scroll class
    if (this.classList.contains("no-scroll")) return;

    let heading = this.getAttribute("href");
    let targetElement = document.querySelector(heading);

    if (!targetElement) return; // If the target element is not found, exit

    let scrollDistance = targetElement.offsetTop;

    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });

    // Hide the menu once clicked if mobile
    let header = document.querySelector("header");
    let body = document.body;

    if (header.classList.contains("active")) {
      header.classList.remove("active");
      body.classList.remove("active");
    }
  });
});
// Scroll to top

toTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to first element
leadDown.addEventListener("click", function () {
  let scrollDistance =
    document.getElementById("lead").nextElementSibling.offsetTop;
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth",
  });
});

// Create timeline
timeline.forEach((timeline) => {
  let userContent = timeline.children[0].children; // user content

  // Create each timeline block
  userContent.forEach((content) => {
    content.classList.add("vtimeline-content");
    content.innerHTML =
      '<div class="vtimeline-point"><div class="vtimeline-block">' +
      content.innerHTML +
      "</div></div>";
  });

  // Add icons to each block
  timeline.querySelectorAll(".vtimeline-point").forEach((point) => {
    point.innerHTML =
      '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>' +
      point.innerHTML;
  });

  // Add dates to the timeline if exists
  timeline.querySelectorAll(".vtimeline-content").forEach((content) => {
    let date = content.getAttribute("data-date");
    if (date) {
      content.parentElement.innerHTML =
        '<span class="vtimeline-date">' +
        date +
        "</span>" +
        content.parentElement.innerHTML;
    }
  });
});

// Open mobile menu

mobileMenuOpen.addEventListener("click", function () {
  document.querySelector("header, body").classList.add("active");
});

// Close mobile menu

mobileMenuClose.addEventListener("click", function () {
  document.querySelector("header, body").classList.remove("active");
});

//////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-text", {
    strings: [
      "through code.",
      "through design.",
      "through creativity.",
      "through collaboration.",
      "through innovation.",
      "through passion.",
    ],
    typeSpeed: 40,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  });
});
