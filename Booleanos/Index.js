/* Programa que Cria transações para um usuário, checa qual o valor médio das transações, 
qual a transação de maior valor, quantas transações de cada tipo foram feitas e qual o saldo final do(a) cliente/empresa.*/

// Programa 1

const sorveteria = {
    dono: 'carlos',
    vendas: [],
    saldo: 0
}

// Registrar também as compras em dinheiro, nesse caso somar ao saldo.



const criaVendas = (transações) => {

    if (transações.tipo == 'crédito') {
        sorveteria.saldo = sorveteria.saldo + transações.valor
        sorveteria.vendas.push(transações)
    } else if (transações.tipo == 'dinheiro') {
        sorveteria.saldo = sorveteria.saldo + transações.valor
        sorveteria.vendas.push(transações)
    } else {
        sorveteria.saldo = sorveteria.saldo - transações.valor
        sorveteria.vendas.push(transações)
    }
}

criaVendas({ tipo: 'crédito', valor: 90 })
criaVendas({ tipo: 'dinheiro', valor: 70 })
criaVendas({ tipo: 'débito', valor: 20 })
criaVendas({ tipo: 'crédito', valor: 60 })
criaVendas({ tipo: 'dinheiro', valor: 35 })
criaVendas({ tipo: 'débito', valor: 50 })

const PegaMaiorTransaçãoPorTipo = () => {
    let maiorTransaçãoCrédito = 0
    let maiorTransaçãoDinheiro = 0
    for (transações of sorveteria.vendas) {
        if (transações.tipo === 'crédito' && transações.valor > maiorTransaçãoCrédito) {
            maiorTransaçãoCrédito = maiorTransaçãoCrédito + transações.valor
        }
        if (transações.tipo === 'dinheiro' && transações.valor > maiorTransaçãoDinheiro) {
            maiorTransaçãoDinheiro = maiorTransaçãoDinheiro + transações.valor
        }
    }
    return {
        dinheiro: maiorTransaçãoDinheiro,
        crédito: maiorTransaçãoCrédito,
    }
}

const pegaTransaçãoMédia = () => {
    let soma = 0
    for (let i = 0; i < sorveteria.vendas.length; i++) {
        soma = sorveteria.vendas[i].valor
    }

    soma / sorveteria.vendas.length
    return {
        média: soma
    }
}

const ContaTransaçõesPorTipo = () => {
    let créd = 0
    let débit = 0
    let din = 0
    for (transações of sorveteria.vendas) {
        if (transações.tipo == 'crédito') {
            créd++
        } else if (transações.tipo == 'débito') {
            débit++
        } else {
            din++
        }
    }
    return {
        crédito: créd,
        débito: débit,
        dinheiro: din
    }
}


console.log(PegaMaiorTransaçãoPorTipo())
console.log(pegaTransaçãoMédia())
console.log(ContaTransaçõesPorTipo())
console.log(sorveteria.saldo)


// Programa 2

// const concessionária = {
//     dono: 'Antônio Carlos',
//     vendas: [],
//     saldo: 0
// }

// criaVendas({ tipo: 'popular', valor: 37.000 })
// criaVendas({ tipo: 'popular', valor: 45.00 })
// criaVendas({ tipo: 'altopadrão', valor: 72.000 })
// criaVendas({ tipo: 'altopadrão', valor: 85.000 })
// criaVendas({ tipo: 'luxo', valor: 120.000 })
// criaVendas({ tipo: 'luxo', valor: 130.000 })

// function criaVendas(vendas) {
//     if (vendas.tipo === 'luxo') {
//         concessionária.saldo = concessionária.saldo + vendas.valor
//         concessionária.vendas.push(vendas)
//     } else if (vendas.tipo === 'altopadrão') {
//         concessionária.saldo = concessionária.saldo + vendas.valor
//         concessionária.vendas.push(vendas)
//     } else {
//         concessionária.saldo = concessionária.saldo - vendas.valor
//         concessionária.vendas.push(vendas)
//     }
// }


// function VendaMaisAltaPorTipo() {
//     let ValorMaisAlto = 0
//     let TransaçãoPopularMaisAlta

//     for (venda of concessionária.vendas) {
//         if (venda.tipo === 'altopadrão' && venda.valor > ValorMaisAlto) {
//             ValorMaisAlto = venda.valor
//             TransaçãoPopularMaisAlta = ValorMaisAlto
//         }
//     }

//     return TransaçãoPopularMaisAlta
// }


// function VendaMédia() {
//     let soma = 0
//     for (let i = 0; i < concessionária.vendas.length; i++) {
//         soma += concessionária.vendas[i].valor
//     }

//     const media = soma / concessionária.vendas.length

//     return media
// }


// function ContaTransaçõesPorTipo() {
//     let tipo1 = 0
//     let tipo2 = 0
//     let tipo3 = 0
//     for (vendas of concessionária.vendas) {
//         if (vendas.tipo == 'popular') {
//             tipo1++
//         } else if (vendas.tipo == 'altopadrão') {
//             tipo2++
//         } else {
//             tipo3++
//         }
//     }
//     return {
//         altopadrão: tipo2,
//         popular: tipo1,
//         luxo: tipo3
//     }
// }

// console.log(concessionária.saldo)
// console.log(VendaMaisAltaPorTipo('popular'))
// console.log(VendaMédia())
// console.log(ContaTransaçõesPorTipo())