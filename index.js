let p1 = document.querySelector('.price1');
let p2 = document.querySelector('.price2');
let p3 = document.querySelector('.price3');
let p4 = document.querySelector('.price4');
let res = document.querySelector('.result');
let button = document.querySelector('.discount')
res.textContent = (`${Number(p1.innerHTML) + Number(p2.innerHTML) + Number(p3.innerHTML) + Number(p4.innerHTML)} рублей`);
button.addEventListener('click', discount);
function discount() {
    res.textContent = (`${(Number(p1.innerHTML) + Number(p2.innerHTML) + Number(p3.innerHTML) + Number(p4.innerHTML)) * 0.8} рублей`);

    const eventTarget = discount.target;
    eventTarget.setAttribute('disabled', true);
}