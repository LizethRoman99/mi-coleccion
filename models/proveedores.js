const{Shema, model}= require('mongoose')

const ProveedorShema=({

    nombreProveedor: {
        type: String,
        required: true,
        unique: true,
    },
    nit: {
        type: Number,
        required: true,
    },
   
    correo: {
        type: String,
        required: true,
    },
    nombreContacto: {
        type: String,
        required: true,
    },
    numeroContacto: {
        type: String,
        required: true,
    },
    estado:{
        type:Boolean,
        default:true,
        required:true
    }



})
//expesificando la estructura que va  a tener la conexion
module.exports = model('Proveedores', ProveedorShema)

