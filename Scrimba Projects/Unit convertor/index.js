

// let num1 = 12;
// document.getElementById("num-to-convert").textContent = num1;
// console.log(num1);


function convertToFeet() {
    let result = num1 * 3.28084;
    let n = result.toFixed(3);
    document.getElementById("feet").innerHTML = n;
}

function convertToMeters() {
    let result = num1 * 0.3048;
    let n = result.toFixed(3);
    document.getElementById("meter").innerHTML = n;
}

function convertToGallons() {
    let result = num1 * 0.264172;
    let n = result.toFixed(3);
    document.getElementById("gallons").innerHTML = n;
}

function converToLiters() {
    let result = num1 * 3.78541;
    let n = result.toFixed(3);
    document.getElementById("liters").innerHTML = n;
}

function convertToKilograms() {
    let result = num1 * 0.453592;
    let n = result.toFixed(3);
    document.getElementById("kilograms").innerHTML = n;
}

function convertToPounds() {
    let result = num1 * 2.20462;
    let n = result.toFixed(3);
    document.getElementById("pounds").innerHTML = n;
}

function allConverters() {
    console.log("Converting...");
    num1 = document.getElementById("num-to-convert").value;
    convertToFeet();
    convertToMeters();
    convertToGallons();
    converToLiters();
    convertToKilograms();
    convertToPounds();
}

function passNumber(){
    document.getElementById("feet-source").innerHTML = num1;
    document.getElementById("meter-source").innerHTML = num1;
    document.getElementById("gallons-source").innerHTML = num1;
    document.getElementById("liters-source").innerHTML = num1;
    document.getElementById("kilograms-source").innerHTML = num1;
    document.getElementById("pounds-source").innerHTML = num1;
}






