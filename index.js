const showConfirmBtn = document.querySelector(".js_btn");
const closeConfirmBtn = document.querySelector(".confirm_close");
const confirmEl = document.querySelector(".confirm");
const confirmOverlayEl = document.querySelector(".confirm_overlay");
const orderFormEl = document.querySelector(".order_form");
const submitOrderBtn = document.getElementById("submitOrder");
const orderSummaryEl = document.querySelector(".order_summary");
const orderInfoEl = document.getElementById("orderInfo");

function showConfirm() {
  confirmEl.classList.add("show");
  confirmOverlayEl.classList.add("show");
  orderFormEl.classList.add("show");
}

function closeConfirm() {
  confirmEl.classList.remove("show");
  confirmOverlayEl.classList.remove("show");
}

function submitOrder() {
  const fullName = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  const novaPoshta = document.getElementById("novaPoshta").value;
  const payment = document.querySelector('input[name="payment"]:checked')
    ? document.querySelector('input[name="payment"]:checked').value
    : "";
  const quantity = document.getElementById("quantity").value;
  const comment = document.getElementById("comment").value;

  if (!fullName || !city || !novaPoshta || !payment || !quantity) {
    alert("Пожалуйста,заполните все обязательные поля");
    return;
  }

  const orderDetails = `
    <p><strong>Товар:</strong> Бананы 69.90 грн/кг</p>
    <p><strong>ФИО покупателя:</strong> ${fullName}</p>
    <p><strong>Город:</strong> ${city}</p>
    <p><strong>Склад Новой почты:</strong> ${novaPoshta}</p>
    <p><strong>Оплата:</strong> ${
      payment === "cash" ? "Послеплата" : "Оплата банковской картой"
    }</p>
    <p><strong>Количество:</strong> ${quantity}</p>
    <p><strong>Коментарий:</strong> ${comment}</p>
  `;
  orderInfoEl.innerHTML = orderDetails;
  orderSummaryEl.classList.add("show");
  orderFormEl.classList.remove("show");
  confirmEl.classList.remove("show");
}

showConfirmBtn.addEventListener("click", showConfirm);
closeConfirmBtn.addEventListener("click", closeConfirm);
submitOrderBtn.addEventListener("click", submitOrder);
