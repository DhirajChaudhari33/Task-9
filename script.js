const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Utility functions
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  formGroup.querySelector("small").innerText = message;
  input.classList.add("error");
  input.classList.remove("success");
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group";
  input.classList.add("success");
  input.classList.remove("error");
}

// Validation functions
function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPasswordInput);
  return true;
}

// Real-time validation
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateName() &
    validateEmail() &
    validatePassword() &
    validateConfirmPassword();

  if (isValid) {
    alert("Registration Successful!");
    form.reset();
    document.querySelectorAll("input").forEach(input => {
      input.classList.remove("success");
    });
  }
});