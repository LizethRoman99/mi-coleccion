const{Schema, model}= require('mongoose')

const ProveedorSchema=({

    nombreProveedor: {
        type: String,
        required: true,
        
    },
    nit: {
        type: String,
        unique:true,
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
    grupoSanguineo{
       type:String,
       required: true,
    },
    estado:{
        type:Boolean,
        default:true,
        required:true
    },
   
})
//expecificando la estructura que va  a tener la conexion
module.exports = model('Proveedores', ProveedorSchema)

