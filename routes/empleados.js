const {router, Router}=require('express')

const route = Router()


const {getEmpleados,postEmpleados, putEmpleados, deleteEmpleados} = require('../controllers/empleados')//importando el controlador

   //listar todos los datos
/*    route.get('/',(req, res)=>{
        res.json({
            msg:'GET'
        })
 
    })
    */
 //consultar dato
    route.get('/', getEmpleados) 
      

    route.post('/', postEmpleados)  

    route.put('/', putEmpleados)  

    route.delete('/', deleteEmpleados)  






//     route.post('/',(req, res) =>{
//         const {documento,nombre,apellidos}=req.query
//         aprendices.push({
//             "documento":documento,
//             "nombre":nombre,
//             "apellidos":apellidos
//         })
//         res.json({
//             msg:aprendices
//         })

//     })//insertar datos
  
//     route.delete('/',(req, res) =>{
//         //implementa la logica


  
//     res.json({
//         msg:'eliminacion exitosa'
//     })
//    })
   module.exports = route


