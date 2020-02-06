//navbar scroll https://www.w3schools.com/howto/howto_js_sticky_header.asp

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//https://stackoverflow.com/questions/16856287/set-link-of-my-navbar-active-with-bootstrap  
$('#nav li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})