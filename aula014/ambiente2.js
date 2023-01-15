var vetor = [];

for(var i = 0 ; i <= 10 ; i++){
    vetor[i] = i % 3;
    console.log(vetor[i]);
} 
console.log(`tamanho do vetor = ${vetor.length}`);
console.log('ordenando o vetor');


vetor.sort();

for(i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

console.log(`um outra forma de usar o um for para percorrer vetores`);

for(i in vetor){
    console.log(vetor[i]);
}