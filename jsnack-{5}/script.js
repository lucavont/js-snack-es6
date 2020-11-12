const myArray = ['Luca', 'Marco', 'Michele', 'Gabriele', 'Martina', 'Flavio'];

let firstNumber = parseInt(prompt('Inserisci un numero da zero a 5'));

let secondNumber = parseInt(prompt('Inserisci un altro numero da zero a 5'));

const userInputs = [firstNumber, secondNumber]

console.log(userInputs.sort())

const filteredArr = myArray.filter((element, index) => {

    if (index >= userInputs[0] && index <= userInputs[1]) {
        return element
    }
})

console.log(filteredArr)