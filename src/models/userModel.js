// definimos la estructura de los datos. Validaciones básicas, que tipo de datos son.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    
    password: {
      type: String,
      required: true
    },
    role: {                     // roles con distintos permisos.
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  {
    timestamps: true    // nos da el historial de creación y actualización
  }
);

module.exports = mongoose.model("User", userSchema);














