const express = require('express')
const { dbConection } = require('../database/config')

//crear array

class Server{

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.proveedoresPath ='/proveedores'//Ruta de la api
        this.routes()
        this.conectarDB()
       
    }
listen(){
   this.app.listen(
    this.port, () =>{
     console.log('escuchando por el puerto '+this.port)


    }
   )
}

routes(){
    this.app.use(this.proveedoresPath, require('../routes/proveedores'))
   }
   async conectarDB(){
     await dbConection()


   }
}


module.exports ={Server}//exportacion de la clase.

//http://github
//crear el metodo get y post para una coleccion de su proyecto
//emplear un array de objetos para alamcednar la informacion