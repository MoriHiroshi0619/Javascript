var vetor = [];

function addNumero(vetor){
    var numero = window.document.getElementById('numtxt');
    var tab = window.document.getElementById('vetor');
    var result = window.document.getElementById('result');
    num = Number(numero.value);
    if(num < 1 || num >100 || vetor.indexOf(num) != -1){
        alert('favor inserir numero validos');
    }else{
        vetor.push(num);
        tab.innerHTML = ''
        for(var i = 0 ; i < vetor.length ; i++){
            var item = window.document.createElement('option');
            item.setAttribute('size', '10');
            item.text = `numero adicionado = ${vetor[i]}`;
            tab.appendChild(item);
        }
        result.innerHTML = '';
    }
    numero.value = ' ';
    numero.focus();

}

function finalizar(vetor){
    var result = window.document.getElementById('result');
    var maior = vetor[0];
    var menor = vetor[0];
    var soma = 0;
    var media;
    if(vetor.length != 0){
        result.innerHTML = `total de elementos no vetor = ${vetor.length} <br>`;
        for(var i = 0 ; i < vetor.length ; i++){
            soma += vetor[i];
            if(vetor[i] > maior){
                maior = vetor[i];
            }
            if(vetor[i] < menor){
                menor = vetor[i];
            }
        }
        media = soma / vetor.length;
        result.innerHTML += `maior elemento = ${maior} <br>`;
        result.innerHTML += `menor elemento = ${menor} <br>`;
        result.innerHTML += `soma de todos os elementos = ${soma}<br>`;
        result.innerHTML += `media dos elementos = ${media.toFixed(1)}`;
        vetor.length = 0;
    
    }else{
        alert('favor inserir algum numero no vetor antes de Finalizar...');
    }
}


/* deve conter no final as seguintes informações 
 *  total de elementos
 *  maior e menor valor dentre os elementos
 *  soma de todos os elementos
 *  media de todos
 */