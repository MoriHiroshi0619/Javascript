var pessoa = {nome: 'hiroshi',
sexo: 'masculino',
idade: 21,
peso: 91.5,
engordar(p=0){
    console.log('engordou');
    this.peso += p;
}};

console.log(`${pessoa.nome} pesa ${pessoa.peso}`);
pessoa.engordar(2);
console.log(`${pessoa.nome} pesa ${pessoa.peso}`);
