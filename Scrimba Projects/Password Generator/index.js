let passwordArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "|", ":", ";", "\"", "'", ",", "<", ".", ">", "/", "?", "~", "`"
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
    password8.innerHTML = password8char;
    password12.innerHTML = password12char;
    password16.innerHTML = password16char;
    password20.innerHTML = password20char;

    copyPassword();

    
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

// function copyPassword(){
//     let copy8 = document.getElementById("copy-8");
//     let copy12 = document.getElementById("copy-12");
//     let copy16 = document.getElementById("copy-16");
//     let copy20 = document.getElementById("copy-20");

//     copy8.addEventListener("click", function(){
//         password8.select();
//         document.execCommand("copy");
//     });
//     copy12.addEventListener("click", function(){
//         password12.select();
//         document.execCommand("copy");
//     });
//     copy16.addEventListener("click", function(){
//         password16.select();
//         document.execCommand("copy");
//     });
//     copy20.addEventListener("click", function(){
//         password20.select();
//         document.execCommand("copy");
//     });
// }




