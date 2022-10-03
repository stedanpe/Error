function validaArray(arr, num){
try{
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');
    if(typeof arr !== 'object') throw new TypeError('Array tem que ser do tipo object');
    if(typeof num !== 'number') throw new TypeError('Num tem que ser do tipo number');
    if(arr.length !== num) throw new RangeError('Tamanho inválido!');
    return arr;
}
catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro é Reference Error!");
        console.log(e.message)
    } else if(e instanceof TypeError){
        console.log("Este erro é Type Error!");
        console.log(e.message)
    } else if(e instanceof RangeError){
        console.log("Este erro é Range Error!");
        console.log(e.message)
    }else{
        console.log("Erro não esperado:" + e);
    }
}

}
console.log(validaArray([1,2,3,4,5],5));