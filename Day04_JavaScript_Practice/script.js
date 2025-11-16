let age = 22;
let name ="surya"

function generate(){
    return "Welcome My name is" + " " + name + " "+ "and My age is"+ " " + age;
}

document.getElementById("message").innerText= generate();