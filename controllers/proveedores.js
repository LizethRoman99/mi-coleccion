const  {response} =require('express');


Proveedor = require('../models/proveedores')

const getProveedores = async(req, res) =>{


    const proveedores = await Proveedor.find();//obteniendo los datos de la coleccion
     res.json({
        msg: proveedores
     })

}
const postProveedores = async(req, res) => {
    const datos= req.body//capturar datos de la url de postman
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
    const {id,nombreProveedor,nit,correo,nombreContacto,numeroContacto,estado}=req.query //desestructurar

try{
        const proveedor = await Proveedor.findOneAndUpdate({id:id},{nombreProveedor:nombreProveedor,nit:nit,correo:correo,nombreContacto:nombreContacto,numeroContacto:numeroContacto,estado:estado})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteProveedores = async(req, res) =>{

    const { id}=req.query //desestructurar

    try{
            const proveedor = await Proveedor.findOneAndDelete({id:id})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
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
