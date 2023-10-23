/*
  FileName: AdvancedWebFormValidation.js
  Content: Advanced web form validation
*/

// Function to validate email address
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/;
  return phoneNumberRegex.test(phoneNumber);
}

// Function to validate password strength
function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Function to validate date in format "MM/DD/YYYY"
function validateDate(date) {
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  return dateRegex.test(date);
}

// Function to validate URL
function validateURL(url) {
  const urlRegex = /^(https?:\/\/)?(?:\w+\.)?\w+\.\w+(?:\/.*)?$/;
  return urlRegex.test(url);
}

// Class for form validation
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.fields = [];
    this.submitBtn = null;
  }

  addField(fieldId, validatorFn) {
    const field = document.getElementById(fieldId);
    this.fields.push({ field, validatorFn });
  }

  addSubmitButton(buttonId) {
    this.submitBtn = document.getElementById(buttonId);
  }

  validateForm() {
    let isFormValid = true;

    for (const { field, validatorFn } of this.fields) {
      const fieldValue = field.value.trim();
      const isValid = validatorFn(fieldValue);

      if (!isValid) {
        isFormValid = false;
        field.classList.add("invalid");
      } else {
        field.classList.remove("invalid");
      }
    }

    if (isFormValid) {
      this.submitBtn.disabled = false;
    } else {
      this.submitBtn.disabled = true;
    }
  }

  initialize() {
    for (const { field } of this.fields) {
      field.addEventListener("input", () => this.validateForm());
    }
  }
}

// Create instance of FormValidator
const validator = new FormValidator("myForm");

// Add form fields and corresponding validators
validator.addField("emailInput", validateEmail);
validator.addField("phoneInput", validatePhoneNumber);
validator.addField("passwordInput", validatePassword);
validator.addField("dateInput", validateDate);
validator.addField("urlInput", validateURL);

// Add submit button
validator.addSubmitButton("submitButton");

// Initialize form validation
validator.initialize();