// definimos la estructura de los datos. Validaciones básicas, que tipo de datos son.
const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    capacityKg: {           // la capacidad en kilos
        type: Number,
        required: true,
        min: 1
    },
     weightKg: {            // el peso de la máquina
        type: Number,
        required: true,
        min: 1              // evita que sea un número negativo
    },
    maxHeightMeters: {          // no es requerido porque no todas las máquinas tienen elevación
    type: Number,
    min: 0
    },
    type: {
      type: String,
      required: true,
      enum: [                   // enum limita los valores del campo. Solo puede tener los valores que se ponen en esta lista.
        "tijera_electrica",
        "tijera_diesel_4x4",
        "manipulador_telescopico",
        "brazo_articulado_electrico",
        "brazo_articulado_diesel_4x4",
        "autoelevador"]
    },
    description: {
        type: String,
        trim: true
    },
     isActive: {
        type: Boolean,
        default: true
    }
    
  },
  {
    timestamps: true            
  }
);

module.exports = mongoose.model("Machine", machineSchema);

