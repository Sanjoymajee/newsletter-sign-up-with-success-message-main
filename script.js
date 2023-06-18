const signupFormComponent = document.getElementById("signup-form");
const successMessageComponent = document.getElementById("success-message");
const subscribeButton = document.getElementById("subscribe");
const inputEmailElement = document.getElementById("email");
const errorTextElement = document.getElementById("error");
const dismissedButtonElement = document.getElementById("dismissed");
const successEmailElement = document.getElementById("success-email");
subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = inputEmailElement.value;
  if (!email) return;
  if (!checkValidEmail(email)) {
    showError();
  } else {
    removeError();
    signupFormComponent.style.display = "none";
    successMessageComponent.style.display = "block";
    successEmailElement.innerHTML = email;
  }
});

dismissedButtonElement.addEventListener("click", (e) => {
  successMessageComponent.style.display = "none";
  signupFormComponent.style.display = "block";
});

const checkValidEmail = (email) => {
  // write a regex for valid email
  const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  return regex.test(email);
};

const removeError = () => {
  errorTextElement.style.display = "none";
  inputEmailElement.style.border = "1px solid hsl(231, 7%, 60%)";
  inputEmailElement.style.outline = "1px solid hsl(234, 29%, 20%)";
  inputEmailElement.style.backgroundColor = "white";
  inputEmailElement.style.color = "hsl(234, 29%, 20%)";
};

const showError = () => {
  errorTextElement.style.display = "block";
  errorTextElement.style.color = "hsl(4, 100%, 67%)";
  inputEmailElement.style.border = "1px solid hsl(4, 100%, 67%)";
  inputEmailElement.style.outline = "1px solid hsl(4, 100%, 67%)";
  inputEmailElement.style.backgroundColor = "rgb(242, 195, 192)";
  inputEmailElement.style.color = "hsl(4, 100%, 67%)";
};
