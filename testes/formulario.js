function enviar(){
    var nome = window.document.getElementById('nometxt').value;
    var sobrenome = window.document.getElementById('sobrenometxt').value;
    var data = window.document.getElementById('datatxt');
    var result = window.document.getElementById('result');
    var sexorad = window.document.getElementsByName('sexo');
    var sexo = '';
    var cpf = window.document.getElementById('cpftxt').value;
    var tudoValido = true;
    
    var dataAtual = new Date();
    var dataInput = new Date(data.value);

    if(nome.length == 0 || sobrenome.length == 0){
        alert('por favor insira seu nome corretamente');
        tudoValido = false;
    }

    if(data.length == 0){
        alert('por favor informe a data de nascimento');
        tudoValido = false;
    }

    if(sexorad[0].checked){
        sexo = 'masculino';
    }else{
        sexo = 'feminino';
    }

    if(cpf.length != 11){
        alert('por favor insira um cpf valido');
        tudoValido = false;
    }

    if(tudoValido){
        result.innerHTML = `nome = ${nome} <br> sobrenome = ${sobrenome} <br>`;
        result.innerHTML += `data = ${data.value} <br> sexo = ${sexo} <br>`;
        result.innerHTML += `cpf = ${cpf} <br>`;
        result.innerHTML += `ano atual = ${dataAtual.getFullYear()} e o ano de nascimento = ${dataInput.getFullYear()}`;
    }
}

