🧾 Task 9 – Client-Side Form Validation Using JavaScript
📌 Project Overview

This project demonstrates client-side form validation using Vanilla JavaScript.

The goal of this task is to validate user inputs before form submission to improve user experience and reduce incorrect data entry.
🚀 Features

👤 Name validation (required field)

📧 Email validation using regular expressions

🔐 Password strength validation

🔁 Confirm password matching

⚠ Real-time validation on blur events

❌ Form submission blocked until all validations pass

🎯 Clear inline error messages (no alert boxes)

🎨 Error & success styling using CSS classes

🛠 Tools & Technologies Used

HTML5

CSS3

JavaScript (Vanilla)

VS Code

Browser DevTools

📂 Project Structure
      Task-9-Form-Validation/
      │
      ├── index.html
      ├── style.css
      └── script.js
         
⚙️ How the Validation Works

HTML default validation is disabled using novalidate

Each input field has its own validation function

Regular expressions are used for email validation

Errors are shown dynamically below input fields

CSS classes are toggled to show error and success states

event.preventDefault() stops form submission until all checks pass

Real-time feedback improves user experience

🧠 Concepts Covered

Client-side vs Server-side validation

Regular Expressions (Regex)

JavaScript Event Listeners

preventDefault() method

Reusable validation functions

DOM manipulation

UX-focused form design
