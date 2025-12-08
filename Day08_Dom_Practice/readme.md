# JavaScript DOM and Events Practice

This project contains my daily practice of JavaScript DOM and Events concepts with working examples.

---

## Concepts Learned Today

- DOM Selection using:
  - querySelector
  - getElementById
- addEventListener
- click Event
- input Event
- innerText for dynamic UI update
- Linking external CSS and JavaScript files
- Basic HTML input handling

---

## Tasks Completed

### 1. Click Counter
- Button click increases the count
- Output updates dynamically on the screen
- Concepts used:
  - querySelector
  - addEventListener
  - innerText

### 2. Live Input Preview
- User types in input box
- Text is displayed live below the input field
- Concepts used:
  - getElementById
  - input event
  - Function call using oninput

---

## Errors Faced and Fixes

### Error 1:
Cannot read properties of null (reading 'addEventListener')

Reason:
- HTML id and JavaScript selector mismatch
- Script loaded before HTML elements

Fix:
- Corrected the ids
- Moved the script tag to the bottom of the body

---

### Error 2:
CSS file linked using script tag

Wrong:
<script src="domScript.css"></script>

Correct:
<link rel="stylesheet" href="domScript.css">

---

### Error 3:
Extra space in JavaScript file name

Wrong:
<script src="./domScript.js "></script>

Correct:
<script src="./domScript.js"></script>

---

### Error 4:
Invalid id with space

Wrong:
<p id="Selected Cities"></p>

Correct:
<p id="selectedCities"></p>

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (DOM and Events)

---

## Project Status

- Click Counter working successfully
- Live Input Preview working successfully
- All major beginner errors identified and fixed
- Project tested in browser

---

## Author

Surya PM  
JavaScript DOM Practice – Day 1

---

This practice helped me understand how JavaScript interacts with HTML using DOM, how events work in real time, and how to debug common beginner mistakes.
