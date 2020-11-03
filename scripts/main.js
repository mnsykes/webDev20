$(document).ready(function () {
	// Click on magnifying glass icon to hide/show search bar
	$("#search-icon").click(function () {
		$("#search-bar").toggle();
	}); // end search bar
});

// side nav
var hamburger = document.getElementById("hamburger");
var sideNav = document.getElementById("side-nav");
var xbtn = document.getElementById("xbtn");

hamburger.addEventListener("click", openNav);
xbtn.addEventListener("click", closeNav);

function openNav() {
	sideNav.style.display = "block";
}

function closeNav() {
	sideNav.style.display = "none";
}
// end side nav
