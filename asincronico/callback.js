//necesito ir a netflix y autenticarme 
function procesouno(nombreusuario,procesodos) {//declarando
    setTimeout(function(){
        if (nombreusuario=="ADMIN") {
            procesodos("Exito",null)//llamando a la 2
        }else{
            procesodos(null,"falla")//llanado a la 2 
        }
    },2000)
}

procesouno("ADMIN",function(resuelvo,rechazo){
    if (resuelvo!= null) {
        console.log("bienvenido a netflix")
    }else{
        console.log("resuelve tus datos")
    }
})//llamando a uno