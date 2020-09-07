const modalBtn = document.querySelector("#modal-button");
const closeBtn = document.querySelector(".close");
const modalBox = document.querySelector("#modal-box");

function openModal() {
	modalBox.style.display = "block";
}

function closeModal() {
	modalBox.style.display = "none";
}

function clickOut() {
	modalBox.style.display = "none";
}

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modalBox.addEventListener("click", clickOut);
