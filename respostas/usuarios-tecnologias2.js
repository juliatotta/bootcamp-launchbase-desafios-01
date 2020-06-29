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

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS")

            return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}

