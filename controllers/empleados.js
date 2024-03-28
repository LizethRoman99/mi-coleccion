const  {response} =require('express');


Empleado = require('../models/empleados')

const getEmpleados = async(req, res) =>{


    const empleados = await Empleado.find();//obteniendo los datos de la coleccion
     res.json({
        msg: empleados
     })

}
const postEmpleados = async(req, res) => {
    const datos= req.body //capturar datos de la url de postman//se cambio de query a body
    let mensaje='Insercion exitosa'
    try{
        const empleado = new Empleado(datos)//instaciar el objeto
        await empleado.save()//guardar la base de datos
        console.log(empleado)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putEmpleados = async(req, res) =>{
    const {nombreCompleto,documento,celular,contraseña,confirmacionContraseña,seguridadSocial,fechaNacimiento,fechaContratacion,fechaTerminacion,correo}=req.body //desestructurar

try{
        const empleado = await Empleado.findOneAndUpdate({documento:documento},{nombreCompleto:nombreCompleto,celular:celular,contraseña:contraseña,confirmacionContraseña:confirmacionContraseña,seguridadSocial:seguridadSocial,fechaNacimiento:fechaNacimiento,fechaContratacion:fechaContratacion,fechaTerminacion:fechaTerminacion,correo:correo})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteEmpleados = async(req, res) =>{

    const { documento}=req.body //desestructurar

    try{
            const empleado = await Empleado.findOneAndDelete({documento:documento})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getEmpleados,
    postEmpleados,
    putEmpleados,
    deleteEmpleados

}
