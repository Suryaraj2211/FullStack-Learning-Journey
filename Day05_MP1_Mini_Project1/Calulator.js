function myFunction(){
    document.getElementById("Mode").innerText = "Calculator Mode ON";

}
function increase(){
    let val = document.getElementById("output").innerText;
    let sum = Number(val) + 1;
    console.log(sum)
    document.getElementById("output").innerText = sum;
}
function decrease(){
    let val = document.getElementById("output").innerText;
    let dec = Number(val) - 1;
    console.log(dec);
    document.getElementById("output").innerText = dec;
}
function reset(){
    document.getElementById("output").innerText = 0;
}

function equal(){
    let box1 = document.getElementById("BOX1").value;
    let BV1 = Number(box1);
    console.log('box1: ', BV1);
    let box2 = document.getElementById("BOX2").value.trim();
    let BV2 = box2;
    console.log('box2: ', BV2);
    let box3 = document.getElementById("BOX3").value;
    let BV3 = Number(box3);
    console.log('box3: ', BV3);
    let val;
switch(BV2)
{
    case "+":
        val = BV1 + BV3;
    break;
    case "-" :
        val = BV1 - BV3;
    break;
    case "*":
        val = BV1 * BV3;
    break;
    case "%":
        val = BV1 % BV3;
    break;
    default:

        val = "enter the correct operator";
        
    }
    console.log('val: ', val);
    document.getElementById("output").innerText = val;
        
}