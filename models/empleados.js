const{Schema, model}= require('mongoose')

const EmpleadoSchema=({

  
      nombreCompleto: {
        type: String,
        required: true,
      },
      documento: {
        type: Number,
        required: true,
        unique:true
      },
      celular: {
        type: String,
        required: true,
      },
      contraseña: {
        type: String,
        required:[true, 'El password debe contener minimo 4 caracteres'],
        min:[4, 'El password debe contener minimo 4 caracteres'],
        max:[10, 'El password debe contener maximo 1o caracteres']
      },
      confirmacionContraseña: {
        type: String,
        type: String,
        required: true,
        validate: {
          validator: function (value) {
            // 'this' se refiere al documento actual
            return value === this.contraseña;
          },
          message: 'La confirmación de la contraseña no coincide con la contraseña.',
        },
      
      },
      seguridadSocial: {
        type: String,
        required: true,
        enum:['Sura','NuevaEps','Coomeva','Sanitas'],
      },
      fechaNacimiento: {
        type: Date,
        get: function (value) {
            // 'this' se refiere al documento actual
            return value ? value.toISOString().split('T')[0] : null;
        },
    },
      fechaContratacion: {
        type: Date,
        default:Date.now

      },
      fechaTerminacion: {
        type: Date,
        require: true
      },
      correo: {
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
module.exports = model('Empleados', EmpleadoSchema)

