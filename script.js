//header must expan onscholl
let header = document.querySelector(".header");
let scrollTopY = document.querySelector(".goTop");
window.onscroll = () =>{
  if (window.scrollY > 30){
    header.classList.add("active");
    menuImg.classList.remove("closeImg");
    navbar.classList.remove("active");
    scrollTopY.style.display ="block";
  }else{
    header.classList.remove("active");
    scrollTopY.style.display ="none";
  }
}

//when menu image is clicked toggle close image
//and toggle menu or navigation
let menuImg = document.querySelector(".menuImg");
let navbar = document.querySelector(".header .container .navbar");
menuImg.onclick = () =>{
  navbar.classList.toggle("active");
  menuImg.classList.toggle("closeImg");
}

//remove and add active links when clicked
let links = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(links).forEach((item, index) =>{
  item.onclick = (e) =>{
  let currentActiveLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentActiveLink.classList.remove("active");
    e.target.classList.add("active");
  }
})
