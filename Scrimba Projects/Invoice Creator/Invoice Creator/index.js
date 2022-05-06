const carWashValue = document.getElementById('car-wash-value');
const lawnMowingValue = document.getElementById('lawn-mowing-value');
const pullWeedsValue = document.getElementById('pull-weeds-value');
const carWashQuantityId = document.getElementById('car-wash-quantity');
const carWashTotalId = document.getElementById('car-wash-total');
const carWashButton = document.getElementById('wash-car-btn');
const mowLawnButton = document.getElementById('mow-lawn-btn');
const pullWeedsButton = document.getElementById('pull-weeds-btn');
const lawnMowingQuantityId = document.getElementById('lawn-mowing-quantity');
const lawnMowingTotalId = document.getElementById('lawn-mowing-total');
const pullWeedsQuantityId = document.getElementById('weed-pulling-quantity');
const pullWeedsTotalId = document.getElementById('weed-pulling-total');
const carWashRemoveBtnId = document.getElementById('remove-car-wash-btn');
const mowLawnRemoveBtnId = document.getElementById('remove-lawn-mowing-btn');
const pullWeedsRemoveBtnId = document.getElementById('remove-weed-pulling-btn');
const totalValueId = document.getElementById('total-value');
const createInvoiceButtonId = document.getElementById('create-invoice-btn')
const textAreaId = document.getElementById('notes-textarea');


let carWash = 10; 
let lawnMowing = 20;
let pullWeeds = 30;
let carWashQuantity = 0;
let lawnMowingQuantity = 0;
let pullWeedsQuantity = 0;
let total = 0;
let carWashTotal =  carWashQuantity * carWash;
let lawnMowingTotal = lawnMowingQuantity * lawnMowing;
let pullWeedsTotal = pullWeedsQuantity * pullWeeds;

carWashValue.innerHTML = ` $${carWash}`;
lawnMowingValue.innerHTML = ` $${lawnMowing}`;
pullWeedsValue.innerHTML = ` $${pullWeeds}`;
carWashQuantityId.innerHTML = ` ${carWashQuantity}`;
carWashTotalId.innerHTML = ` $${carWashTotal}`;
lawnMowingQuantityId.innerHTML = ` ${lawnMowingQuantity}`;
lawnMowingTotalId.innerHTML = ` $${lawnMowingTotal}`;
pullWeedsQuantityId.innerHTML = ` ${pullWeedsQuantity}`;
pullWeedsTotalId.innerHTML = ` $${pullWeedsTotal}`;
totalValueId.innerHTML = ` $${total}`;

carWashButton.addEventListener('click', () => {
    carWashQuantity++;
    carWashTotal = carWashQuantity * carWash;
    carWashQuantityId.innerHTML = ` ${carWashQuantity}`;
    carWashTotalId.innerHTML = ` $${carWashTotal}`;
    calculateTotal();
});

mowLawnButton.addEventListener('click', () => {
    lawnMowingQuantity++;
    lawnMowingTotal = lawnMowingQuantity * lawnMowing;
    lawnMowingQuantityId.innerHTML = ` ${lawnMowingQuantity}`;
    lawnMowingTotalId.innerHTML = ` $${lawnMowingTotal}`;
    calculateTotal();
});

pullWeedsButton.addEventListener('click', () => {
    pullWeedsQuantity++;
    pullWeedsTotal = pullWeedsQuantity * pullWeeds;
    pullWeedsQuantityId.innerHTML = ` ${pullWeedsQuantity}`;
    pullWeedsTotalId.innerHTML = ` $${pullWeedsTotal}`;
    calculateTotal();
});
if (carWashRemoveBtnId) {
    carWashRemoveBtnId.addEventListener('click', () => {
        if (carWashQuantity > 0) {
            carWashQuantity--;
            carWashTotal = carWashQuantity * carWash;
            carWashQuantityId.innerHTML = ` ${carWashQuantity}`;
            carWashTotalId.innerHTML = ` $${carWashTotal}`;
            calculateTotal();
        }
    });
}

if (mowLawnRemoveBtnId) {
    mowLawnRemoveBtnId.addEventListener('click', () => {
        if (lawnMowingQuantity > 0) {
            lawnMowingQuantity--;
            lawnMowingTotal = lawnMowingQuantity * lawnMowing;
            lawnMowingQuantityId.innerHTML = ` ${lawnMowingQuantity}`;
            lawnMowingTotalId.innerHTML = ` $${lawnMowingTotal}`;
            calculateTotal();
        }
    });
}


if (pullWeedsRemoveBtnId) {
    pullWeedsRemoveBtnId.addEventListener('click', () => {
        if (pullWeedsQuantity > 0) {
            pullWeedsQuantity--;
            pullWeedsTotal = pullWeedsQuantity * pullWeeds;
            pullWeedsQuantityId.innerHTML = ` ${pullWeedsQuantity}`;
            pullWeedsTotalId.innerHTML = ` $${pullWeedsTotal}`;
            calculateTotal();
        }
    });
}


createInvoiceButtonId.addEventListener('click', () => {
    const pageToPDF = document.getElementById('main');
    html2pdf().from(pageToPDF).save();
});

createInvoiceButtonId.addEventListener('click',resetQuantities);
createInvoiceButtonId.addEventListener('click',calculateTotal);



function calculateTotal() {
    total = carWashTotal + lawnMowingTotal + pullWeedsTotal;
    totalValueId.innerHTML = ` $${total}`;
}
function resetQuantities(){
    carWashQuantity = 0;
    lawnMowingQuantity = 0;
    pullWeedsQuantity = 0;
    textAreaId.value = "";
    totalValueId.innerHTML = 0;
    carWashTotal =  carWashQuantity * carWash;
    lawnMowingTotal = lawnMowingQuantity * lawnMowing;
    pullWeedsTotal = pullWeedsQuantity * pullWeeds;
    carWashQuantityId.innerHTML = ` ${carWashQuantity}`;
    carWashTotalId.innerHTML = ` $${carWashTotal}`;
    lawnMowingQuantityId.innerHTML = ` ${lawnMowingQuantity}`;
    lawnMowingTotalId.innerHTML = ` $${lawnMowingTotal}`;
    pullWeedsQuantityId.innerHTML = ` ${pullWeedsQuantity}`;
    pullWeedsTotalId.innerHTML = ` $${pullWeedsTotal}`;
    totalValueId.innerHTML = ` $${total}`;
}
