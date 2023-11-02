const InmuebleModel = require('../models/inmueble.model');

const getInmuebles = async (req, res) => {
    const inmuebles = await InmuebleModel.find();
    res.json(inmuebles);
}

const createInmueble = async (req, res) => {
    const result = await InmuebleModel.create(req.body);
    res.json(result); 
}

const updateInmueble = (req, res) => {
    res.json('PUT')
}

const deleteInmueble = (req, res) => {
    res.json('DELETE')
}

module.exports = { getInmuebles, createInmueble, updateInmueble, deleteInmueble };