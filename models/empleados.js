const{Schema, model}= require('mongoose')

const EmpleadoSchema=({

  
      nombreCompleto: {
        type: String,
        required: true,
      },
      documento: {
        type: String,
        required: true,
        unique:true
      },
      celular: {
        type: String,
        required: true,
      },
      contraseña: {
        type: String,
        min:[4, 'El password debe contener minimo 4 caracteres'],
        max:[10, 'El password debe contener maximo 1o caracteres']
      },
      confirmacionContraseña: {
        type: String,
        type: String,
        validate: {
          validator: function (value) {
            // 'this' se refiere al documento actual
            return value === this.contraseña;
          },
          message: 'La confirmación de la contraseña no coincide con la contraseña.',
        },
      
      },
     
      fechaNacimiento: {
        type: String,
        require:true
        
    },
      fechaContratacion: {
        type: String,
       

      },
      fechaTerminacion: {
        type: String,
       
      },
      correo: {
        type: String,
        required: true,
      },
      estado:{
        type:Boolean,
        default:true,
       
    }



})
//expesificando la estructura que va  a tener la conexion
module.exports = model('Empleados', EmpleadoSchema)

