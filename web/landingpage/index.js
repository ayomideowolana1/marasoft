const load = () => {
  let toggle = document.getElementById("nav-toggle");
  toggle.addEventListener("click", () => {
    let dropdown = document.getElementById("nav-dropdown");
    let openIcon = document.getElementById("nav-toggle-open");
    let closeIcon = document.getElementById("nav-toggle-close");

    if(dropdown.style.display === "none"){
       dropdown.style.display = "block";
       closeIcon.style.display="block"
       openIcon.style.display="none"
      }else{
         dropdown.style.display = "none";
         openIcon.style.display="block"
         closeIcon.style.display="none"
    }
   //  console.log(dropdown.style.display)
  });
};
