const arrayObj = [
    { name: 'Poppy', type: 'tshirt', color: 'red' },
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name: 'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' },
];

const arrayObjCopy = [];

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

arrayObj.forEach((element) => {
    arrayObjCopy.push({...element, position: generateRandomLetter() })
})

console.log(arrayObjCopy)