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
    console.log(datos)
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


const putProveedores = async(req, res) => {
    // console.log(req.body); // Imprime el cuerpo de la solicitud en la consola para verificar los campos
    const { nombreProveedor, nit,direccion, correo, nombreContacto, numeroContacto, estado } = req.body;
    let mensaje=''
    try {
        const proveedor = await Proveedor.findOneAndUpdate(
           
            { nit: nit },
            {
                nombreProveedor: nombreProveedor,
                correo: correo,
                direccion: direccion,
                nombreContacto: nombreContacto,
                numeroContacto: numeroContacto,
                estado: estado
            }
        );

        mensaje = 'actualizacion exitosa';
    } catch (error) {
        mensaje = error;
    }

    console.log('preparando respuesta');
    res.json({
        msg: mensaje
    });
};

const deleteProveedores = async (req, res) => {
    try {
        const { nit } = req.query; // Asegúrate de obtener el valor correctamente

        const proveedor = await Proveedor.findOneAndDelete({ nit: nit });
        console.log('Proveedor eliminado:', proveedor);

        mensaje = 'Eliminacion Exitosa';
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};


module.exports={
    getProveedores,
    postProveedores,
    putProveedores,
    deleteProveedores

}
