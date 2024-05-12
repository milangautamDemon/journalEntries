function updateParticulars(e) {
    const particular = document.createElement("p");
    particular.classList = "w-2/5";
    particular.textContent = e.target.value;
}

function updateDebit(e) {
    const debit = document.createElement("p");
    debit.classList = "w-1/5";
    debit.textContent = e.target.value;
}

function updateCredit(e) {
    const credit = document.createElement("p");
    credit.classList = "w-1/5";
    credit.textContent = e.target.value;
}

export {updateParticulars, updateDebit, updateCredit};