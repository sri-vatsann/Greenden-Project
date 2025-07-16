//Selecting side navbar, menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var x = document.getElementById("xmark")
menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})
x.addEventListener("click", function(){
    sidenav.style.right="-50%"
})
