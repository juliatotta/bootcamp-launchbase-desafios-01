/* Cálculo de aposentadoria
O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma*/

const nome = 'Xablau'
const sexo = 'M'
const idade = 60
const contribuicao = 35
const tempoContribuicao = idade + contribuicao

if(sexo === 'M') {
    if(tempoContribuicao >= 95 && contribuicao >= 35) {
        console.log(`${nome}, você já pode se aposentar! Tempo de contribuição = ${contribuicao} anos`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar. Tempo de contribuição = ${contribuicao} anos`)
    }
} else {
    if(tempoContribuicao >= 85 && contribuicao >= 30) {
        console.log(`${nome}, você já pode se aposentar! Tempo de contribuição = ${contribuicao} anos`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar. Tempo de contribuição = ${contribuicao} anos`)
    }
}