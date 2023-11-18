const {router, Router}=require('express')
const { getFichas, postFichas, putFichas, deleteFichas } = require('../controllers/fichaTecnica')

const route = Router()



//importando el controlador

   //listar todos los datos
/*    route.get('/',(req, res)=>{
        res.json({
            msg:'GET'
        })
 
    })
    */
 //consultar dato
    route.get('/', getFichas) 
      

    route.post('/', postFichas)  

    route.put('/', putFichas)  

    route.delete('/', deleteFichas)  






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


