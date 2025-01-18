//「モーダルテストボタン」を押下したら、モーダルが表示されるような実装をしましょう！！
// __の箇所に適切なものを書きましょう！

const signInButton = document.querySelector(".open-modal");
const modalCloseButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//when you click the button show modal(overlay and display モーダルテスト)
signInButton.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.add("show");
});

//close the modal when you click 閉じる button
modalCloseButton.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});

//close the modal when you click out of the modal range
overlay.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});