const  {response} =require('express');
const asyc=  requiere('hbs/lib/async')

Hurto = require('../models/proveedores')

const getProveedores = async(req, res) =>{


    const proveedores = await Proveedor.find();//obteniendo los datos de la coleccion
     res.json({
        msg: hurtos
     })

}
const postProveedores = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const proveedor = new Proveedor(datos)//instaciar el objeto
        await proveedor.save()//guardar la base de datos
        console.log(proveedor)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putProveedores = async(req, res) =>{

try{
        const proveedor = await Proveedor.findOneAndUpdate({nombreProveedor:nombreProveedor},{nit:nit,correo:correo,nombreContacto:nombreContacto,numeroContacto:numeroContacto,estado:estado})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
        const { nombreProveedor,nit,correo,nombreContacto,numeroContacto,estado}=req.query //desestructurar
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteProveedores = async(req, res) =>{

    try{
            const proveedor = await Proveedor.findOneAndUpdate({nombreProveedor:nombreProveedor})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            const { nombreProveedor,nit,correo,nombreContacto,numeroContacto,estado}=req.query //desestructurar
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getProveedores,
    postProveedores,
    putProveedores,
    deleteProveedores

}
