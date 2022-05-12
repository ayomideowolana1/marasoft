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

  let footerTogglerItems = $(".toggle-item > div.toggle-header");

  let toggles = $(".toggle-body");
  let togglesArr = Array.from(toggles);

  togglesArr.forEach(item => {
    $(`#${item.id}`).toggle();
  });

  Array.from(footerTogglerItems).forEach(header => {
    header.addEventListener("click", e => {
      togglesArr.forEach(item => {
        $(`#${item.id}`).hide();
      });
      let id = header.dataset.toggleId;
      let element = document.getElementById(id);

      if (element.style.display == "none") {
        $(`#${id}`).slideDown(500);
      } else {
        $(`#${id}`).slideUp();
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

  mainText.css("visibility", "hidden");
  mainHeaderH1.css("visibility", "hidden");
  mainHeaderP.css("visibility", "hidden");
  mainMockup.css("visibility", "hidden");
  mainCta.css("visibility", "hidden");

  console.log(main.height());

  setTimeout(() => {
    main.css("visibility", "visible");
  }, 500);

  setTimeout(() => {
    mainHeaderH1.css("visibility", "visible");
    mainHeaderH1.addClass("animate__animated animate__bounceInUp");
  }, 1000);

  setTimeout(() => {
    mainHeaderP.css("visibility", "visible");
    mainHeaderP.addClass("animate__animated animate__bounceInUp");
  }, 1300);

  setTimeout(() => {
    mainCta.css("visibility", "visible");
    mainCta.addClass("animate__animated animate__bounceIn");
  }, 3000);

  setTimeout(() => {
    mainMockup.css("visibility", "visible");
    mainMockup.addClass("animate__animated animate__zoomIn");
  }, 4000);

  setTimeout(() => {
    logo.css("visibility", "visible");
    logo.addClass("animate__animated animate__lightSpeedInRight");
  }, 100);

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
    let animHeightF3 = mainHeight + f1.height() + f2.height() -250;
    
    console.log(scroll)
    console.log(animHeightF1,animHeightF2,animHeightF3)

    if (scroll > animHeightF1) {
      f1.css("visibility", "visible");
      f1.addClass("animate__animated animate__fadeInUp");
    }
    
    if (scroll > animHeightF2) {
      f2.css("visibility", "visible");
      f2.addClass("animate__animated animate__fadeInRight");
    }
    
    if (scroll > animHeightF3) {
      f3.css("visibility", "visible");
      f3.addClass("animate__animated animate__fadeInUp");
    }
  };
};
