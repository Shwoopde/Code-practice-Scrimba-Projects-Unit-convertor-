let passwordArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "|", ":", ";", "\"", "'", ",", ".", "/", "?", "~", "`"
];


let password8char = "";
let password12char = "";
let password16char = "";
let password20char = "";
let password8 = document.getElementById("password-text-8");
let password12 = document.getElementById("password-text-12");
let password16 = document.getElementById("password-text-16");
let password20 = document.getElementById("password-text-20");
let button = document.getElementById("generate-btn");




function createPasswords(){

    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        password8char += passwordArray[randomIndex];
    }
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        password12char += passwordArray[randomIndex];
    }
    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        password16char += passwordArray[randomIndex];
    }
    for (let i = 0; i < 20; i++) {
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        password20char += passwordArray[randomIndex];
    }
    password8.value = password8char;
    password12.value = password12char;
    password16.value = password16char;
    password20.value = password20char;
}



function render() {
    password8char = "";
    password12char = "";
    password16char = "";
    password20char = "";
}
function passwordProcess(){
    button.addEventListener("click", createPasswords);
    button.addEventListener("click", render);
}


function copyToClipBoard1() {
    if (password8char !== "8 Characters") {
        password8.select();
        document.execCommand("copy");
        alert("Password copied to clipboard");
    }
}
function copyToClipBoard2() {
    if (password12char !== "12 Characters") {
        password12.select();
        document.execCommand("copy");
        alert("Password copied to clipboard");
    }
}
function copyToClipBoard3() {
    if (password16char !== "16 Characters") {
        password16.select();
        document.execCommand("copy");
        alert("Password copied to clipboard");
    }
}
function copyToClipBoard4() {
    if (password20char !== "20 Characters") {
        password20.select();
        document.execCommand("copy");
        alert("Password copied to clipboard");
    }
}



