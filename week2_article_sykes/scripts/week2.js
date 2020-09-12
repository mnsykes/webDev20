homeBtn = document.getElementById("home-btn");

window.addEventListener("scroll", showBtn);

function showBtn() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		homeBtn.style.display = "block";
	} else {
		homeBtn.style.display = "none";
	}
}
