let buttonsAddToBasket = document.querySelectorAll(".add-to-bsk");
let numberOfGoods = document.querySelector(".number-of-goods");

for (let buttonAddToBasket of buttonsAddToBasket) {
  buttonAddToBasket.onclick = function () {
    if (buttonAddToBasket.dataset.add === "add") {
      buttonAddToBasket.dataset.add = "";
      numberOfGoods.textContent--;
      if (numberOfGoods.textContent == 0) {
        numberOfGoods.classList.remove("show");
      }
      swapStates(buttonAddToBasket);
    } else {
      buttonAddToBasket.dataset.add = "add";
      if (numberOfGoods.textContent == 0) {
        numberOfGoods.classList.add("show");
      }
      numberOfGoods.textContent++;
      swapStates(buttonAddToBasket);
    }
  };
}
function swapStates(event) {
  if (event.classList.contains("trash-btn")) {
    event.classList.remove("trash-btn");
    event.textContent = "Добавить в корзину";
  } else {
    event.classList.add("trash-btn");
    event.textContent = "Удалить из корзины";
  }
  return;
}
