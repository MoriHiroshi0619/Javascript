function contar(){
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');

    var resudado = window.document.getElementById('resuldado');

    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);
    if(inicio == 0 && fim == 0 && passo == 0){ //outra solução seria verificar utilizando o inicio.length == 0 para ver se tem algo digitado
        alert('por favor preencha os dados abaixo...');
    }else if(inicio == 0){
        alert('por favor digite algo diferente de nada ou 0 em [começar de]...');
    }else if(fim <= inicio){
        alert('por favor digite um numero maior do que o inicio');
    }else if(passo == 0){
        alert('por favor digite algo diferente de nada ou 0 em [passo]...');
    }else{
        /*
        for(var i = inicio; inicio <= fim; i += passo){
            resudado.innerHTML += `${i.value}`;
        }*/
        resudado.innerHTML = `inicio = ${inicio} fim = ${fim} passo = ${passo} <br>`;
        for(var i = inicio; i <= fim; i += passo){
            resudado.innerHTML += `${i} `;
        }
    }
}