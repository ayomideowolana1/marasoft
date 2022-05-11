const load = () => {
  let toggle = document.getElementById("nav-toggle");

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

  let footerTogglerItems = document.querySelectorAll(".toggle-item > h4");
  let arr = Array.from(footerTogglerItems);
  arr.forEach(item => {
    let id = item.dataset.toggleId;
    item.addEventListener("click", e => {
      let elems = Array.from(document.querySelectorAll(".toggle"));
      elems.forEach(elemToHide => {
        elemToHide.style.display = "none";
      });

      let elemToToggle = document.getElementById(id);
      console.log(elemToToggle.style.display);
      if (elemToToggle.style.display == "none") {
        elemToToggle.style.display = "block";
      }else{
        elemToToggle.style.display = "none";
      }
      console.log(elemToToggle.style.display);
    });
  });
};
