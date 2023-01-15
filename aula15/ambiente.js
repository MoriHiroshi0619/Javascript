function parimpar(n){
    if(n % 2 == 0){
        return 'par';
    }else{
        return 'impar';
    }
}

res = parimpar(5);

console.log(res);