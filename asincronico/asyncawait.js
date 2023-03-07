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

    async function llamandolapromesa(){console.log("estamos llamando")
    try{
        let respuesta=await procesouno("ADMIN")
        console.log(respuesta);
    }catch(error){
        console.log(respuesta)
    }
}
llamandolapromesa()