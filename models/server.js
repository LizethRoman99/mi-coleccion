const express = require('express')
const cors =require('cors');//implementar seguridad
const bodyParser = require('body-parser')// paquete convertir objeto enviado desde el formulario
const { dbConection } = require('../database/config')



//crear array

class Server{

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.proveedoresPath ='/proveedores'
        this.empleadosPath ='/empleados'//Ruta de la api
        this.fichaTecnicaPath = '/fichaTecnica';//Ruta de la api
        this.middelwares()
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
    this.app.use(this.proveedoresPath, require('../routes/proveedores'));
    this.app.use(this.empleadosPath, require('../routes/empleados'));
    this.app.use(this.fichaTecnicaPath, require('../routes/fichaTecnica'));
   }

   middelwares(){//es un puente entre el fronend y backend
    this.app.use( cors());
    this.app.use( bodyParser.json())//parsiar objetos a nsertar en la db
   }


   async conectarDB(){
     await dbConection()


   }
}


module.exports ={Server}//exportacion de la clase.

//http://github
//crear el metodo get y post para una coleccion de su proyecto
//emplear un array de objetos para alamcednar la informacion