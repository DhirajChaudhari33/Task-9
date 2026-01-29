# 🧾 Task 9 – Client-Side Form Validation Using JavaScript

## 📌 Project Overview
This project is a **client-side registration form validation system** built using **HTML, CSS, and Vanilla JavaScript**.

The application validates user input on the browser side before form submission to ensure better **user experience, clean data, and proper feedback**.
---

## 🚀 Features
- 👤 Name field validation (required)
- 📧 Email validation using Regular Expressions
- 🔐 Password length validation
- 🔁 Confirm password matching
- ⚠ Real-time validation on `blur` events
- ❌ Prevents form submission until all validations pass
- 📝 Inline error messages (no alert boxes for errors)
- 🎨 Error and success styling using CSS classes

---

## 🛠 Tools & Technologies Used
- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- VS Code  
- Browser DevTools  

---

## 📂 Project Structure
      Task-9-Form-Validation/
      │
      ├── index.html
      ├── style.css
      └── script.js

---

## ⚙️ How It Works
1. HTML default validation is disabled using `novalidate`
2. Each input field has a separate validation function
3. Email validation is handled using regular expressions
4. Error messages are displayed dynamically below inputs
5. CSS classes are toggled to show success and error states
6. `event.preventDefault()` prevents form submission if validation fails
7. Real-time feedback improves overall user experience

---

## 🧠 Concepts Covered
- Client-side vs Server-side validation
- Regular Expressions (Regex)
- JavaScript Event Listeners
- `preventDefault()` method
- Reusable validation logic
- DOM manipulation
- UX-focused form validation      
