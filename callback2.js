// declarar la funcion ppl 
// un parametro de la funcion ppl es un callback
function principal(numeros,callback) {
    setTimeout(function(){
        let suma=0
        numeros.forEach(numero => suma=suma+numero);
        callback(suma) //llamando al callback
    },5000)
}
// llamando a la funcion ppl 
let numeros =[1,2,3,4,5,6]
principal(numeros,function(suma){// declarando el callback
    let operacion =suma*100
    console.log(`la sumatoria final es ${operacion}`)
})

