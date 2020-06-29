const programador = {
    nome: "Diogo",
    idade: 32,
    tecnologias: [
        {
            nome: 'Python',
            especialidade: 'Data Science'
        },
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)