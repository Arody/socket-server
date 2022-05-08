//Configuracion del puerto por el que esccuchara el servidor.


const SERVER_PORT:number = Number(process.env.PORT) || 3000; 

//Exporta la constante para usarla en cualquier documento.
export default  SERVER_PORT;