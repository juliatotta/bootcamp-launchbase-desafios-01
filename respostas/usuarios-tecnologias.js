const usuarios = [
    {
        nome: "Xablau",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Xena",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Militante",
        tecnologias: ["HTML", "Node.js"]
    }
]

for(let usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}
