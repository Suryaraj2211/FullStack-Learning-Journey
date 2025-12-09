
let result = document.querySelector("#btn");

result.addEventListener("click", function (){
    let value = document.querySelector("#inptxt").value;
    document.querySelector("#result").innerText = value;

});