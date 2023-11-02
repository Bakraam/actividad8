const { Schema, model } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    num_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_contacto: String,
    extension_m2: Number,
}, {
    versionKey: false
});

module.exports = model('inmueble', inmuebleSchema);