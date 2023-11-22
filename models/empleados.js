const{Shema, model}= require('mongoose')

const EmpleadoShema=({

    id: {
        type: String,
        required: true,
        unique: true,
      },
      nombreCompleto: {
        type: String,
        required: true,
      },
      Documento: {
        type: Number,
        required: true,
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
      },
      fechaNacimiento: {
        type: Date,
        required: true,
      },
      fechaContratacion: {
        type: Date,
        default:Date.now

      },
      fechaTerminacion: {
        type: Date,
      },
      correo: {
        type: String,
        required: true,
      }



})
//expesificando la estructura que va  a tener la conexion
module.exports = model('Empleados', EmpleadoShema)

