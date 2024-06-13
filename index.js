const showConfirmBtn = document.querySelector(".js_btn");
const closeConfirmBtn = document.querySelector(".confirm_close");
const confirmEl = document.querySelector(".confirm");
const confirmOverlayEl = document.querySelector(".confirm_overlay");

function showConfirm() {
  confirmEl.classList.add("show");
  confirmOverlayEl.classList.add("show");
}
function closeConfirm() {
  confirmEl.classList.remove("show");
  confirmOverlayEl.classList.remove("show");
  window.location.href = "./index.html";
}

showConfirmBtn.addEventListener("click", showConfirm);
closeConfirmBtn.addEventListener("click", closeConfirm);
