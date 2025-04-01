function selectOption(unit) {
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('active');
    });

    let selectedOption = document.querySelector(`.option:nth-child(${unit + 1})`);
    selectedOption.classList.add('active');

    document.getElementById("unit" + unit).checked = true;
    
    let totalPrice = "$10.00 USD";
    if (unit === 2) {
        document.getElementById("selection2").style.display = "block";
        totalPrice = "$18.00 USD";
    } else {
        document.getElementById("selection2").style.display = "none";
        if (unit === 3) totalPrice = "$24.00 USD";
    }

    document.getElementById("total-price").innerText = totalPrice;
}