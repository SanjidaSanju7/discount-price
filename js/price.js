
document.getElementById('apply-btn').addEventListener('click', function () {

    const couponText = document.getElementById('coupon-code');
    const couponString = couponText.value;
    couponText.value = '';

    if (couponString == 'DOM') {

        couponText.setAttribute('disabled', true);

    }
    else if (couponString !== 'DOM') {
        return alert("Coupon code doesn't match")
    }



    const allPrice = document.getElementsByClassName('price');
    for (const price of allPrice) {

        const previousPrice = parseFloat(price.innerText);

        const discountPrice = previousPrice * (30 / 100);
        price.innerText = previousPrice - discountPrice;

    }

})












