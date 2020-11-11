const bici = [{
        tipo: "mountain-bike",
        marca: "torpedo",
        peso: 15
    },
    {
        tipo: "da-corsa",
        marca: "bianchi",
        peso: 10
    },
    {
        tipo: "downhill",
        marca: "santa-cruz",
        peso: 7
    }
];

for (let i = 0; i < bici.length; i++) {
    $('.lista-bici').append("<b>Nome</b>: " + bici[i].tipo)
    $('.lista-bici').append(" <b>Marca</b>: " + bici[i].marca)
    $('.lista-bici').append(" <b>Peso</b>: " + bici[i].peso + "<br>")
};

const compareNumbers = (a, b) => a.peso - b.peso;
// bici.sort(function(a, b) {
//     return a.peso - b.peso;
// })

console.log(bici.sort(compareNumbers))

$('.bici-leggera').append(`La bici più leggera è la ${bici[0].marca} con il peso di ${bici[0].peso}`)