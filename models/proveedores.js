const{Schema, model}= require('mongoose')

const ProveedorSchema=({

    id:{
        type:Number,
        unique: true,
        required: true,
    },

    nombreProveedor: {
        type: String,
        required: true,
        
    },
    nit: {
        type: Number,
        required: true,
    },
    direccion: {
        type: String,
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
module.exports = model('Proveedores', ProveedorSchema)

