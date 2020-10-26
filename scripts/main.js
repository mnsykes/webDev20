// HOMEPAGE CAROUSEL
// var slideIndex = 0;
// showSlides();

// function showSlides() {
// 	var i;
// 	var slides = document.getElementsByClassName("carousel-item");
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {
// 		slideIndex = 1;
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	setTimeout(showSlides, 2500); // Change image every 2.5 seconds
// }
// END HOMEPAGE CAROUSEL

// MATERIALIZE
document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".sidenav");
	var instances = M.Sidenav.init(elems, options);
});

var landing = document.getElementById("landing-page-container");

landing.style.backgroundColor = "red";
