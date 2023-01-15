function mostrar(){
    var numero = window.document.getElementById('numero');
    var tab = window.document.getElementById('tab');

    numero = Number(numero.value);

    if(numero > 10 ){
        alert('por favor digitar um numero menor que 10');
    }else{
        tab.innerHTML = '';
        for(var i = 1; i < 10 ; i++){
            
            var item = window.document.createElement('option');
            item.setAttribute('size', '10');
            item.text = `${numero} X ${i} = ${numero *  i}`;
            tab.appendChild(item);
        }
    }
}