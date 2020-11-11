// JSNACK 4A

const squadre = [{
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

// JSNACK 4B

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor((Math.random() * 6))
    squadre[i].falliSubiti = Math.floor((Math.random() * 6))
}

// Juventus

// squadre[0].puntiFatti = Math.floor((Math.random() * 6))
// squadre[0].falliSubiti = Math.floor((Math.random() * 6))

// Milan

// squadre[1].puntiFatti = Math.floor((Math.random() * 6))
// squadre[1].falliSubiti = Math.floor((Math.random() * 6))

// Inter

// squadre[2].puntiFatti = Math.floor((Math.random() * 6))
// squadre[2].falliSubiti = Math.floor((Math.random() * 6))

console.log(squadre)