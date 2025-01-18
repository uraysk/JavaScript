//Write the code that shows "hoge" when you click sign-in button.
const signInButton = document.querySelector('.open-modal');


signInButton.addEventListener('click', (event) => {
  console.log("hoge");
  //event=click-button/move-mouse/type-in-a-box
  //event.target => if you click button, button is the target/ if it's paragraph, paragraph should be that one.
  //innerHTML = Contents in the html tags. <button>SignIn</button> = show "SignIn"
  console.log(event.target.innerHTML);
});


