const load = () => {
  let toggle = document.getElementById("nav-toggle");
  let toggleImg = document.getElementById("nav-toggle img");

  if (screen.width <= 1024) {
    loadAnimations();
  } else {
    loadDesktopAnimations();
  }

  toggle.addEventListener("click", () => {
    let dropdown = document.getElementById("nav-dropdown");
    let openIcon = document.getElementById("nav-toggle-open");
    let closeIcon = document.getElementById("nav-toggle-close");

    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      closeIcon.style.display = "block";
      openIcon.style.display = "none";
      document.body.style.overflow = "hidden";
    } else {
      dropdown.style.display = "none";
      openIcon.style.display = "block";
      closeIcon.style.display = "none";
      document.body.style.overflow = "";
    }
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

  let main = $("main");
  let mainText = $("main .text");
  let mainHeaderH1 = $("main .text h1");
  let mainHeaderP = $("main .text p");
  let mainMockup = $("main .mockup");
  let mainCta = $("main .findOutMore");

  let features = $(".features");
  let featuresSection = $(".features > section");

  mainText.css("visibility", "hidden");

  // logo fade in
  setTimeout(() => {
    // logo.addClass("animate__animated animate__lightSpeedInRight animate__fast");
    logo.css("visibility", "visible");
  }, 300);

  //main fade in up text &&  mock up
  setTimeout(() => {
    mainText.addClass("animate__animated animate__fadeInUp   ");
    mainText.css("visibility", "visible");
    mainMockup.addClass("animate__animated animate__fadeInUp ");
    mainMockup.css("visibility", "visible");
  }, 500);

  setTimeout(() => {
    mainCta.addClass("animate__animated animate__zoomIn animate__faster");
    mainCta.css("visibility", "visible");
  }, 1300);

  //  Scroll events
  window.onscroll = () => {
    // when scroll passes main animate features
    let mainHeight = main.height();
    let scroll = window.scrollY;
    let f1 = $("#feature-1");
    let f1a = $("#feature-1 a");
    let f2 = $("#feature-2");
    let f3 = $("#feature-3");
    let cta = $("cta");
    let bottom = $("#bottom");

    let test = main.position();

    let scroll_pass_main = test.top + mainHeight;

    let animHeightF1 = mainHeight - 250;
    let animHeightF2 = mainHeight + f1.height() - 250;
    let animHeightF3 = mainHeight + f1.height() + f2.height() - 250;
    let bottomHeight = $("#bottom").position();

    // if(scroll >= (scroll_pass_main / 2)){
    //   window.scrollTo(0,scroll_pass_main)
    // }

    if (scroll > mainHeight) {
      f1.css("visibility", "visible");
      f1.addClass("animate__animated animate__fadeInRight animate__fast");
      f1a.addClass("animate__animated animate__zoomIn");
    }

    if (scroll > animHeightF2) {
      f2.css("visibility", "visible");
      f2.addClass("animate__animated animate__fadeInRight animate__fast");
    }

    if (scroll > animHeightF3) {
      f3.css("visibility", "visible");
      f3.addClass("animate__animated animate__fadeInRight animate__fast");
    }

    let f3_position = $("#feature-3").position();
    let f3_height = $("#feature-3").height();
    let f3_total_height = f3_height + f3_position.top + 100;

    if (scroll > f3_total_height) {
      $("#bottom").addClass(
        "animate__animated animate__fadeInUp animate__slow"
      );
      $("#bottom").css("visibility", "visible");
    }
  };
};

const loadDesktopAnimations = () => {
  let text = $(".text");
  let mockup = $(".mockup");

  setTimeout(() => {
    text.addClass("animate__animated animate__fadeInLeft");
    text[0].style.visibility = "visible";
    mockup.addClass("animate__animated animate__fadeInRight animated__slow");
    mockup[0].style.visibility = "visible";
  }, 300);

  //  Scroll events
  window.onscroll = () => {
    let mainHeight = $("main").height();

    let f1 = $("#feature-1");
    let f1Height = $("#feature-1").height();
    let f1H1 = $("#f1-text h1");
    let f1p = $("#f1-text p");
    let f1Mockup = $("#f1-mockup");
    let f1a = $("#feature-1 a");

    let f2 = $("#feature-2");
    let f2Height = $("#feature-2").height();
    let f2H1 = $("#f2-text h1");
    let f2p = $("#f2-text p");
    let f2Mockup = $("#f2-mockup");
    let f2a = $("#feature-2 a");

    let f3 = $("#feature-3");
    let f3Height = $("#feature-3").height();
    let f3H1 = $("#f3-text h1");
    let f3p = $("#f3-text p");
    let f3Mockup = $("#f3-mockup");
    let f3a = $("#feature-3 a");

    let bottom = $("#bottom");

    let scroll = window.scrollY;

    // feature 1 scroll animations
    if (scroll >= mainHeight / 2) {
      f1H1.addClass("animate__animated animate__fadeInLeft ");
      f1H1.css("visibility", "visible");
      f1Mockup.addClass("animate__animated animate__fadeInRight ");
      f1Mockup.css("visibility", "visible");

      setTimeout(() => {
        f1p.addClass("animate__animated animate__fadeInLeft ");
        f1p.css("visibility", "visible");
      }, 100);

      setTimeout(() => {
        f1a.addClass("animate__animated animate__fadeInLeft ");
        f1a.css("visibility", "visible");
      }, 200);
    }

    // feature 2 scroll animations
    if (scroll >= mainHeight + f1Height) {
      console.log("feature 2 scroll animations");
      f2H1.addClass("animate__animated animate__fadeInRight ");
      f2H1.css("visibility", "visible");
      f2Mockup.addClass("animate__animated animate__fadeInLeft ");
      f2Mockup.css("visibility", "visible");

      setTimeout(() => {
        f2p.addClass("animate__animated animate__fadeInRight ");
        f2p.css("visibility", "visible");
      }, 100);

      setTimeout(() => {
        f2a.addClass("animate__animated animate__fadeInRight ");
        f2a.css("visibility", "visible");
      }, 200);
    }

    // feature 3 scroll animations
    if (scroll >= mainHeight + f1Height + f2Height + 300) {
      console.log("feature 3 scroll animations");
      f3H1.addClass("animate__animated animate__fadeInLeft ");
      f3H1.css("visibility", "visible");
      f3Mockup.addClass("animate__animated animate__fadeInRight ");
      f3Mockup.css("visibility", "visible");

      setTimeout(() => {
        f3p.addClass("animate__animated animate__fadeInLeft ");
        f3p.css("visibility", "visible");
      }, 100);

      setTimeout(() => {
        f3a.addClass("animate__animated animate__fadeInLeft ");
        f3a.css("visibility", "visible");
      }, 200);
    }

    // bottom scroll animations
    if (scroll >= mainHeight + f1Height + f2Height + f3Height +  800) {
      // console.log(bottom[0]);
      $("#bottom").addClass("animate__animated animate__fadeInUp");
      $("#bottom").css("visibility","visible")
      console.log("bottom scroll animations");
    }

  };
};
