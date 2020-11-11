const triangolo = {
    base: 10,
    altezza: 20
}

const area = (triangolo.base * triangolo.altezza) / 2;

const ipotenusa = (triangolo.altezza ** 2 + triangolo.base ** 2) ** .5;

const perimetro = triangolo.altezza + triangolo.base + ipotenusa;

console.log(
    `L'ipotenusa del triangolo è: ${ipotenusa}
    Il perimetro del triangolo è: ${perimetro}`
)