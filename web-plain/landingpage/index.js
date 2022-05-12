const load = () => {
  let toggle = document.getElementById("nav-toggle");

  loadAnimations();

  toggle.addEventListener("click", () => {
    let dropdown = document.getElementById("nav-dropdown");
    let openIcon = document.getElementById("nav-toggle-open");
    let closeIcon = document.getElementById("nav-toggle-close");

    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      closeIcon.style.display = "block";
      openIcon.style.display = "none";
    } else {
      dropdown.style.display = "none";
      openIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
    //  console.log(dropdown.style.display)
  });

  let footerToggles = Array.from(
    document.querySelectorAll(".toggle-item > .toggle-header")
  );
  let footerTogglesBody = Array.from(
    document.querySelectorAll(".toggle-item > .toggle-body")
  );

  footerToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      let id = toggle.dataset.toggleId;
      for (let i = 0; i < footerTogglesBody.length; i++) {
        if (footerTogglesBody[i].id == id) {
          if (footerTogglesBody[i].style.display == "block") {
            footerTogglesBody[i].style.display = "none";
          } else {
            footerTogglesBody[i].style.display = "block";
          }
        } else {
          footerTogglesBody[i].style.display = "none";
        }
      }
    });
  });
};

const loadAnimations = () => {
  let logo = $(".logo");

  let main = $("main ");
  let mainText = $("main .text");
  let mainHeaderH1 = $("main .text h1");
  let mainHeaderP = $("main .text p");
  let mainMockup = $("main .mockup");
  let mainCta = $("main .findOutMore");

  let features = $(".features");
  let featuresSection = $(".features > section");

  // mainText.css("visibility", "hidden");
  // mainHeaderH1.css("visibility", "hidden");
  // mainHeaderP.css("visibility", "hidden");
  // mainMockup.css("visibility", "hidden");
  // mainCta.css("visibility", "hidden");

  // logo fade in
  setTimeout(() => {
    // logo.addClass("animate__animated animate__lightSpeedInRight animate__fast");
    logo.css("visibility", "visible");
  }, 300);

  //main fade in up
  setTimeout(() => {
    mainText.addClass("animate__animated animate__fadeInUp   ");
    mainMockup.addClass("animate__animated animate__fadeInUp ");
  }, 500);

  setTimeout(() => {
    mainCta.addClass("animate__animated animate__rubberBand animate__slow ");
    mainCta.css("visibility", "visible");
  }, 1300);

  // setTimeout(() => {
  //   mainHeaderP.css("visibility", "visible");
  //   mainHeaderP.addClass("animate__animated animate__bounceInUp");
  // }, 1300);

  // setTimeout(() => {
  //   mainMockup.css("visibility", "visible");
  //   mainMockup.addClass("animate__animated animate__zoomIn");
  // }, 4000);

  //  Scroll events
  window.onscroll = () => {
    // when scroll passes main animate features
    let mainHeight = main.height();
    let scroll = window.scrollY;
    let f1 = $("#feature-1");
    let f2 = $("#feature-2");
    let f3 = $("#feature-3");

    let animHeightF1 = mainHeight - 250;
    let animHeightF2 = mainHeight + f1.height() - 250;
    let animHeightF3 = mainHeight + f1.height() + f2.height() - 250;

    console.log(scroll);
    console.log(animHeightF1, animHeightF2, animHeightF3);

    if (scroll > animHeightF1) {
      f1.css("visibility", "visible");
      f1.addClass("animate__animated animate__fadeInRight");
    }

    if (scroll > animHeightF2) {
      f2.css("visibility", "visible");
      f2.addClass("animate__animated animate__fadeInRight");
    }

    if (scroll > animHeightF3) {
      f3.css("visibility", "visible");
      f3.addClass("animate__animated animate__fadeInRight");
    }
  };
};
