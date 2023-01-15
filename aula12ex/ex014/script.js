function carregar(){
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var cumprimento = window.document.getElementById('cumpri');
  var hiroshi = window.document.getElementById('hiroshi');
  var data = new Date();
  var hora = data.getHours();

  

  msg.innerHTML = `agora são ${hora} horas.`
  if(hora >= 0 && hora < 12){
    //bom dia;
    img.src = 'manha.png';
    document.body.style.background = '#fef49f';
    cumprimento.innerHTML = 'Bom Dia!';
    hiroshi.style.color = 'black';
  }else if(hora >=12 && hora <18){
    //boa tarde;
    img.src = 'tarde.png';
    document.body.style.background = '#ff892d';
    cumprimento.innerHTML = 'Boa Tarde!';
  }else{
    //boa noite;
    img.src = 'noite.png';
    document.body.style.background = '#121b25';
    cumprimento.innerHTML = 'Boa Noite!'
  }
}

