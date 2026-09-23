let amigo = []

let pessoa = {nome: 'josé', sexo:'M', peso: '85.4', engordar(p=0){console.log('Engordou')
    this.peso += p
}}
console.log(typeof amigo)
console.log(typeof pessoa)
console.log(pessoa)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg.`)
