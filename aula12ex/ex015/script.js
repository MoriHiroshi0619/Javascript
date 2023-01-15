var dataAtual = window.document.getElementById('dataAtual');

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

dataAtual.innerHTML = `a data de hoje é ${dia}/ ${mes}/ ${ano}`;

function verificar() {
    var anoUsuario = window.document.getElementById('txtano');
    var resultado = window.document.getElementById('resultado');
    var sexo = window.document.getElementsByName('radsexo');
    var idade;
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('alt', 'foto de pessoas');

    anoUsuario = Number(anoUsuario.value);

    if (anoUsuario < 1900 || anoUsuario > ano) {
        window.alert('verifique os dados e tente novamente');
    } else {
        idade = ano - anoUsuario;
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade < 120 && idade >= 50) {
                //idoso homem
                img.setAttribute('src', 'idosoHomem.png');
            } else if (idade < 50 && idade >= 25) {
                //adulto homem
                img.setAttribute('src', 'adultoHomem.png');
            } else if (idade < 25 && idade >= 14) {
                //jovem homem
                img.setAttribute('src', 'jovemHomem.png');
            } else if (idade < 14 && idade >= 3) {
                //crianca homem
                img.setAttribute('src', 'criancaHomem.png');
            } else {
                //bebe
                img.setAttribute('src', 'bebe.png');
            }
        } else {
            genero = 'Mulher';
            if (idade < 120 && idade >= 50) {
                //idoso mulher
                img.setAttribute('src', 'idosoMulher.png');
            } else if (idade < 50 && idade >= 25) {
                //adulto mulher
                img.setAttribute('src', 'adultoMulher.png');
            } else if (idade < 25 && idade >= 14) {
                //jovem mulher
                img.setAttribute('src', 'jovemMulher.png');
            } else if (idade < 14 && idade >= 3) {
                //crianca mulher
                img.setAttribute('src', 'criancaMulher.png');
            } else {
                //bebe
                img.setAttribute('src', 'bebe.png');
            }
        }

        resultado.innerHTML = `Se você nasceu em <strong>${anoUsuario}</strong>`;
        resultado.innerHTML += `<br> sua idade é <strong>${idade}</strong>`;
        resultado.innerHTML += `<br> você é um ${genero}<br>`;
        resultado.appendChild(img);
    }

}