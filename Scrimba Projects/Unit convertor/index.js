

let num1 = 12;
document.getElementById("num-to-convert").textContent = num1;
console.log(num1);


document.getElementById("myDiv").onclick = function() {
    document.getElementById("myForm").submit();
  };

function convertToFeet() {
    let result = num1 * 3.28084;
    let n = result.toFixed(3);
    document.getElementById("feet").textContent = n;
}

function convertToMeters() {
    let result = num1 * 0.3048;
    let n = result.toFixed(3);
    document.getElementById("meter").textContent = n;
}

function convertToGallons() {
    let result = num1 * 0.264172;
    let n = result.toFixed(3);
    document.getElementById("gallons").textContent = n;
}

function converToLiters() {
    let result = num1 * 3.78541;
    let n = result.toFixed(3);
    document.getElementById("liters").textContent = n;
}

function convertToKilograms() {
    let result = num1 * 0.453592;
    let n = result.toFixed(3);
    document.getElementById("kilograms").textContent = n;
}

function convertToPounds() {
    let result = num1 * 2.20462;
    let n = result.toFixed(3);
    document.getElementById("pounds").textContent = n;
}

function allConverters() {
    convertToFeet();
    convertToMeters();
    convertToGallons();
    converToLiters();
    convertToKilograms();
    convertToPounds();
}

function passNumber(){
    document.getElementById("feet-source").textContent = num1;
    document.getElementById("meter-source").textContent = num1;
    document.getElementById("gallons-source").textContent = num1;
    document.getElementById("liters-source").textContent = num1;
    document.getElementById("kilograms-source").textContent = num1;
    document.getElementById("pounds-source").textContent = num1;
}






