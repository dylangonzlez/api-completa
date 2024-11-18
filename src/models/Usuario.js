
import mongoose from 'mongoose'; // Importa Mongoose para crear el esquema

// Define el esquema de la colección de usuarios
export const userSchema = new mongoose.Schema({
  nombre: {
    type: String, // El nombre es un campo de tipo string
    required: true, // Es obligatorio
  },
  email: {
    type: String,
    required: true,
    unique: true, // Debe ser único en la base de datos
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: mongoose.Schema.Types.ObjectId, // Hace referencia al ID de un documento en la colección `roles`
    ref: 'Rol',
    required: true,
  },
});

// Exporta el modelo para usarlo en otros archivos
export default mongoose.model("Usuario", userSchema);
