var dollarAmount;
var pinkAmount;

window.onload = function() {
    if (!localStorage.getItem('isFirstVisit')) {
        localStorage.setItem('dollarVariable', 0);
        localStorage.setItem('pinkVariable', 0);
        localStorage.setItem('isFirstVisit', 'false');
    }

    dollarAmount = localStorage.getItem('dollarVariable');
    pinkAmount = localStorage.getItem('pinkVariable');
    updateValues(dollarAmount, pinkAmount);
};

function updateValues(dollarAmount, pinkAmount) {
    exchangeRatePinkToDollar = Math.round(dollarAmount * 100 / pinkAmount) / 100;
    exchangeRateDollarToPink = Math.round(pinkAmount * 100 / dollarAmount) / 100;
    document.getElementById("dollarAmount").innerHTML = "Total dollars in economy: <b> " + dollarAmount + "</b>";
    document.getElementById("pinkAmount").innerHTML = "Total pinks in economy: <b> " + pinkAmount + "</b>";
    document.getElementById("dollarToPink").innerHTML = "<b>1</b> dollar is worth <b>" + exchangeRateDollarToPink + "</b> pink(s)";
    document.getElementById("pinkToDollar").innerHTML = "<b>1</b> pink is worth <b>" + exchangeRatePinkToDollar + "</b> dollar(s)";
}

document.addEventListener('DOMContentLoaded', function() {
    // Assuming you've already loaded the value of isAdmin from storage
    window.isAdmin = sessionStorage.getItem('isAdmin') === 'true';

    const adminElements = document.querySelectorAll('.admin-only');

    if (window.isAdmin) {
        adminElements.forEach(el => {
            el.style.display = 'flex';
        });
    }
});

// FOR EDITING DOLLARS
document.getElementById("dollar-button").addEventListener("click", function() {
    const dollars = document.getElementById("dollar-form");
    if (dollars.style.display === 'none' || dollars.style.display === '') {
        dollars.style.display = 'flex';
    } else {
        dollars.style.display = 'none';
    }
});

document.getElementById('dollar-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting and the page from reloading
    event.preventDefault();
    const dollars = document.getElementById("dollar-form");

    // Get the value of the input field
    const inputDollars = document.querySelector('[name="dollarInputField"]').value;

    localStorage.setItem('dollarVariable', inputDollars);
    dollarAmount = localStorage.getItem('dollarVariable');
    updateValues(dollarAmount, pinkAmount);
    dollars.style.display = 'none';
});

// FOR EDITING PINKS
document.getElementById("pink-button").addEventListener("click", function() {
    const pinks = document.getElementById("pink-form");
    if (pinks.style.display === 'none' || pinks.style.display === '') {
        pinks.style.display = 'flex';
    } else {
        pinks.style.display = 'none';
    }
});

document.getElementById('pink-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting and the page from reloading
    event.preventDefault();
    const pinks = document.getElementById("pink-form");

    // Get the value of the input field
    const inputPinks = document.querySelector('[name="pinkInputField"]').value;

    localStorage.setItem('pinkVariable', inputPinks);
    pinkAmount = localStorage.getItem('pinkVariable');
    updateValues(dollarAmount, pinkAmount);
    pinks.style.display = 'none';
});