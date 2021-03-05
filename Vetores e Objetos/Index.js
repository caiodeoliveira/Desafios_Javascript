/*      programa que armazena dados de uma empresa dentro de um objeto chamado empresa       */


const user = {
    nome: 'caio',
    empresa: {
        nome: 'CR Chaveiro',
        cor: 'amarelo',
        foco: 'chaves e abertura de portas',
        endereço: [
            rua = 'avenida claudio gueiros leite',
            número = 2340,
        ]
    }
}

console.log(`A empresa ${user.empresa.nome} focada em ${user.empresa.foco} localiza-se na ${user.empresa.endereço}`)



const user = {
    nome: 'carlos antonio',
    empresa: {
        nome: 'caoa',
        cor: 'azul e branco',
        foco: 'venda de carros',
        endereço: [
            rua = 'av.governador agamenon magalhães',
            número = 203
        ]
    },
}

console.log(`o empresário ${user.nome} possui uma empresa chamada ${user.empresa.nome} localizada em ${user.empresa.endereço[0]},  ${user.empresa.endereço[1]}`)




const empresario = {
    nome: 'caio',
    empresa: {
        nome: 'inpact',
        cor: 'green',
        foco: 'conscientização dos recursos naturais',
        endereço: [
            rua = 'doutor barão augusto',
            número = 580
        ]
    },
}

console.log(`o empresário ${empresario.nome}, é dono de uma empresa que promove a ${empresario.empresa.foco}, localizada na ${empresario.empresa.endereço}`)



/*      Programa que armazena em um objeto dados de um programador como nome, idade e tecnologias que trabalha
        e imprime em tela a tecnologia e a especialidade */


Exemplo 1

const profissional = {
    propriedade: [
        { nome: 'c++', especialidade: 'desktop' },
        { nome: 'python', especialidade: 'Data Science' },
        { nome: 'java script', especialidade: 'web/mobile' },
    ]
}
console.log('O usuário Manoel tem 25 anos e usa tecnologia  ' + profissional.propriedade[2].nome + '  com especialidade em ' + profissional.propriedade[2].especialidade)


Exemplo 2

const funcionarios = {
    tecnologias: [
        { empresa: 'facebook', especialidade: 'armazenamento de dados' },
        { empresa: 'waze', especialidade: 'informações de localização e transito' },
        { empresa: 'ifood', especialidade: 'apresentar pratos e restaurantes que fazem entrega' },
    ]
}

console.log('o tiago trabalha na empresa ' + funcionarios.tecnologias[1].empresa + ' com especialidade em ' + funcionarios.tecnologias[1].especialidade)