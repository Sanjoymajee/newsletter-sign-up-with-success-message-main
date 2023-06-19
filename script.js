const signupFormComponent = document.getElementById("signup-form");
const successMessageComponent = document.getElementById("success-message");
const subscribeButton = document.getElementById("subscribe");
const inputEmailElement = document.getElementById("email");
const errorTextElement = document.getElementById("error");
const dismissedButtonElement = document.getElementById("dismissed");
const successEmailElement = document.getElementById("success-email");

inputEmailElement.addEventListener("input", (e) => {
  const email = e.target.value;
  if (email && !checkValidEmail(email)) {
    showError();
  } else {
    removeError();
  }
});

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = inputEmailElement.value;
  if (!email) return;
  if (!checkValidEmail(email)) {
    showError();
  } else {
    removeError();
    signupFormComponent.classList.add("hide-signup-form");
    successMessageComponent.classList.add("show-success");
    successEmailElement.innerHTML = email;
  }
});

dismissedButtonElement.addEventListener("click", (e) => {
  successMessageComponent.classList.remove("show-success");
  signupFormComponent.classList.remove("hide-signup-form");
});

const checkValidEmail = (email) => {
  // write a regex for validating email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const removeError = () => {
  errorTextElement.classList.remove("show-error");
  inputEmailElement.classList.remove("show-input-error");
};

const showError = () => {
  errorTextElement.classList.add("show-error");
  inputEmailElement.classList.add("show-input-error");
};
