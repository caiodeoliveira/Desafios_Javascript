/* Programa que armazena um array de usuários (objetos), onde cada usuário tem um nome e suas tecnologias (novo array) e 
Percorre a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários*/

Exemplo 1

const users = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


for (let i = 0; i < users.length; i++) {

    console.log(`O usuário ${users[i].nome} trabalha com ${users[i].tecnologias[0]}, ${users[i].tecnologias[1]}`)
}

Exemplo 2

const Concessionária = [
    { nome: "carlos", tecnologias: ["flat desk", 'fast step'] },
    { nome: "Jasmine", tecnologias: ["dt clean", "hurry up"] },
    { nome: "Tuane", tecnologias: ["easily", "confex"] }
];

for (let c = 0; c < Concessionária.length; c++)

    console.log(`Na concessionária O(A) ${Concessionária[c].nome} trabalha com ${Concessionária[c].tecnologias}`)


/*  O programa Percorre o array de usuários e, para cada um, verifica se o mesmo trabalha com CSS utilizando
 a função construída abaixo, em caso afirmativo, ele imprime em tela as informações do usuário.*/

const user = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(user) {
    for (let i = 0; i < user.tecnologias.length; i++) {
        if (user.tecnologias[i] == 'CSS') {
            return true
        }
    }
    return false
}

for (let i = 0; i < user.length; i++) {
    const userUsaCss = checaSeUsuarioUsaCSS(user[i])
    if (userUsaCss) {
        console.log(`O usuário ${user[i].nome} trabalha com CSS.`)
    }
}