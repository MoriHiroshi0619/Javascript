var num = [4,9,1,8];
console.log(`nosso vetor = ${num}`);
console.log(`tamanho do meu vetor = ${num.length}`);
num[4] = 5;// em js é possivel alocar um novo elemento em um espaço novo de memoria sem ter que se preocupar com alocação dinamica
console.log(`nosso vetor = ${num}`);
console.log(`tamanho do meu vetor = ${num.length}`);
num.push(3); //adiciona automaticamente um novo elemento na ultima posicao do vetor;
console.log(`nosso vetor = ${num}`);
console.log(`tamanho do meu vetor = ${num.length}`);
console.log(`ordenando meu vetor com o metodo sort()`);
console.log(`vetor ordenado = ${num.sort()}`);
//comando indexof() ira retornar o indice da chave procurada no vetor;
if(num.indexOf(3) == -1){
    console.log('não foi encontrado essa chave no vetor');
}else{
    console.log(`a chave 3 esta na posicao ${num.indexOf(3)} do meu veotr`);
}

