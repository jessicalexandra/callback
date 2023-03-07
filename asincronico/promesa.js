// una promesa es una funcion asincrona que facilita su escritura a traves de 2 callback 

function procesouno(nombreusu){
let promesa=new Promise(function(resuelve,rechaza){
    setTimeout(function(){
        if (nombreusu=="ADMIN") {
            resuelve("exito")
        }else{
            rechaza("falla")
        }
    },2000)
})
return promesa 
}
procesouno("ADMIN")
.then(function(respuesta){console.log(respuesta)})// camino de exito
.catch(function(respuesta){console.log(respuesta)})//camino de rechazo