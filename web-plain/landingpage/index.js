const load = () => {
  let toggle = document.getElementById("nav-toggle");
  let toggleImg = document.getElementById("nav-toggle img");

  loadAnimations();

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
    console.log(toggle);
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
  // mainHeaderH1.css("visibility", "hidden");
  // mainHeaderP.css("visibility", "hidden");
  // mainMockup.css("visibility", "hidden");
  // mainCta.css("visibility", "hidden");

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
    let f1a = $("#feature-1 a");
    let f2 = $("#feature-2");
    let f3 = $("#feature-3");
    let cta = $("cta");
    let bottom = $("#bottom");

    let test = main.position();

    let scroll_pass_main = test.top + mainHeight;

    // console.log(test.top + mainHeight)

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
    console.log(f3_total_height);
    
    if (scroll > f3_total_height) {
      $("#bottom").addClass("animate__animated animate__fadeInUp animate__slow");
      $("#bottom").css("visibility", "visible");
      console.log("passed");
    }

  };
};
