let count = 0;

let btn = document.querySelector("#btn");
let value = document.querySelector("#count");

btn.addEventListener("click", function () {
  count += 1;
  value.innerText = "you clicked " + count + " times";
});

function myAPP() {
  let inputBox = document.getElementById("text1").value;
  document.getElementById("inputBox").innerText = inputBox;
}
