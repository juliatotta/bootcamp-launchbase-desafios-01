const user = {
    name: "Júlia",
    transactions: [],
    balance: 0
};
/** 
 * Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário
 * 
 * transaction: essa função deve receber como parâmetro um objeto de transação 
 * 
 * Exemplo de transaction: { type: 'credit', value: 50.5}
 * 
 * */
function createTransaction(transaction) {
    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }

    user.transactions.push(transaction)

}

function getHigherTransactionByType(type) {
    let higherTransaction = null;

    for (let transaction of user.transactions) {
        if (transaction.type == type) {
            if (higherTransaction === null) {
                higherTransaction = transaction
            } else if (transaction.value > higherTransaction.value) {
                higherTransaction = transaction
            }
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    average = 0;

    for (let i = 0; i < user.transactions.length; i++) {
        average += user.transactions[i].value / user.transactions.length
    }

    return average
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count

}



createTransaction({ type: 'credit', value: 10 })
createTransaction({ type: 'debit', value: 5 })
createTransaction({ type: 'credit', value: 55 })
createTransaction({ type: 'debit', value: 2 })
createTransaction({ type: 'debit', value: 4 })

console.log(user.balance);


console.log(getHigherTransactionByType('debit'));
console.log(getHigherTransactionByType('credit'));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());

