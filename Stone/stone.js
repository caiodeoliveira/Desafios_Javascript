const compras = [

    {
        nome: "banana",
        quantidade: 5,
        preco_unitario: 200,
    },
    {
        nome: "Desifetante",
        quantidade: 3,
        preco_unitario: 330,
    },
    {
        nome: "feijão",
        quantidade: 2,
        preco_unitario: 800,
    },
    {
        nome: "arroz",
        quantidade: 3,
        preco_unitario: 800,
    },
    {
        nome: "biscoito",
        quantidade: 4,
        preco_unitario: 120,
    },
    {
        nome: "amendoin",
        quantidade: 2,
        preco_unitario: 1300,
    },
]

const emails = [

    {
        email: 'josevan_pereira@outlook.com',
    },
    {
        email: 'carlosalberto96@gmail.com',
    },
    {
        email: 'erikSilva@hotmail.com',
    },
    {
        email: 'andrei.surf@gmail.com',
    },
]


function somaEDivideValores() {
    let soma = 0
    let somaTotal = 0
    let divPorPessoa = 0
    for (let i = 0; i < compras.length; i++) {
        soma = compras[i].preco_unitario * compras[i].quantidade
        somaTotal = somaTotal + soma
        divPorPessoa = somaTotal / emails.length
    }
    if (emails.length == '') {
        console.log('Quem vai pagar a conta?')
    } else {
        console.log(`A divisão será a seguinte: ${Math.round(divPorPessoa)}`)
    }
}
const vf = somaEDivideValores(compras)

let pagamentos = new Map();
pagamentos.set("josevan_pereira@outlook.com", 2267)
pagamentos.set("carlosalberto96@gmail.com", 2267)
pagamentos.set("erikSilva@hotmail.com", 2267)
pagamentos.set("andrei.surf@gmail.com", 2267)

for (let [chave, valor] of pagamentos) {
    console.log(chave + ' Vai pagar ' + valor + ' R$')
}
