//Navbars/////////////////////////////////
const menuBars = document.getElementById("menu-bars")
const overlay = document.getElementById("overlay")
const nav1 = document.getElementById("nav-1")
const nav2  = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const nav4 = document.getElementById("nav-4")
const nav5 = document.getElementById("nav-5")

// function 
function toggleNav(){
  // toogle menubars
  menuBars.classList.toggle("change")

//   toggle menu active or not
  overlay.classList.toggle("overlay-active");
  if(overlay.classList.contains("overlay-active")){
    overlay.classList.remove("overlay-slide-left")

    overlay.classList.add("overlay-slide-right")
  }
  else{
    overlay.classList.remove("overlay-slide-right")

    overlay.classList.add("overlay-slide-left")

  }
}

// Event Listeners
menuBars.addEventListener("click",toggleNav);
nav1.addEventListener("click",toggleNav)
nav2.addEventListener("click",toggleNav)
nav3.addEventListener("click",toggleNav)
nav4.addEventListener("click",toggleNav)
nav5.addEventListener("click",toggleNav)