const  {response} =require('express');


Ficha = require('../models/fichaTecnica')

const getFichas = async(req, res) =>{


    const fichas = await Ficha.find();//obteniendo los datos de la coleccion
     res.json({
        msg: fichas
     })

}
const postFichas = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const fichas = new Ficha(datos)//instaciar el objeto
        await fichas.save()//guardar la base de datos
        console.log(fichas)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putFichas = async(req, res) =>{
    const {id,nombreProducto, costoProducto,cantidadStock,talla,costoTotal,precioVenta,insumo,cantidadInsumo,precioInsumo}=req.query //desestructurar

try{
        const ficha = await Ficha.findOneAndUpdate({id:id},{nombreProducto:nombreProducto,costoProducto:costoProducto,cantidadStock:cantidadStock,talla:talla,costoTotal:costoTotal,precioVenta:precioVenta, insumo: insumo,cantidadInsumo:cantidadInsumo,precioInsumo:precioInsumo})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteFichas = async(req, res) =>{

    const { id}=req.query //desestructurar

    try{
            const ficha = await Ficha.findOneAndDelete({id:id})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getFichas,
    postFichas,
    putFichas,
    deleteFichas

}