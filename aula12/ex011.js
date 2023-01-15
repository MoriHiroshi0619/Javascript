var idade = 66;

if(idade < 16){
  console.log('nao vota');
}else{
  if(idade >= 16 && idade <18){
    console.log('voto opcional');
  }else if (idade >= 65){
    console.log('voto opcioanl')
  }else{
    console.log('voto obrigatorio');
  }
}