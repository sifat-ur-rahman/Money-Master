function input(element) {
    const inputElemint = document.getElementById(element);
    const inputString = inputElemint.value;
    const inputNumber = parseFloat(inputString)
    return inputNumber
}

function setTextElementById(elementId, newElement) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newElement

}


document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputIncome = input('income-input')

    const inputFood = input('food-input')
    const inputRent = input('rent-input')
    const inputClothes = input('clothes-input')

    const totalExpnses = inputFood + inputRent + inputClothes
    setTextElementById('total-expenses', totalExpnses)

    const balance = inputIncome - totalExpnses
    setTextElementById('balance', balance)



})

document.getElementById('btn-save').addEventListener('click', function () {
    const balanceField = document.getElementById('balance')
    const balanceString = balanceField.innerText
    const balance = parseFloat(balanceString)

    const saveingPersent = input('save-input')


    const savingAmount = balance * (saveingPersent / 100)
    setTextElementById('saving-amount', savingAmount)

    const remainingBalance = balance - savingAmount
    setTextElementById('remaining-balance', remainingBalance)
})
