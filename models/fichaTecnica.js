const{Shema, model}= require('mongoose')

const FichaShema=({
    id: {
        type: Number,
        unique: true,
        required: true,
      },
      nombreProducto: {
        type: String,
        required: true,
      },
      costoProducto: {
        type: Number,
        required: true,
      },
      cantidadStock: {
        type: Number,
        required: true,
      },
      talla: {
        type: String,
        required:[true, 'La talla es requerida'],
        enum:['S','M','L','XL'],
      },
      costoTotal: {
        type: Number,
      },
      precioVenta: {
        type: Number,
        required: true,
      },
      insumo: {
        type: String,
        required: true,
      },
      cantidadInsumo: {
        type: Number,
        required: true,
      },
      precioInsumo: {
        type: Number,
        required: true,
      },
    })
    module.exports = model('fichaTecnica', FichaShema)