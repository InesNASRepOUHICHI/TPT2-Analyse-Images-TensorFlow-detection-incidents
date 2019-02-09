const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Vehicule = db.Vehicule;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Vehicule.find().select();
}

async function getById(id) {
    return await Vehicule.findById(id).select();
}

async function create(vehiculeParam) {
    const vehicule = new Vehicule(vehiculeParam);
    // save vehicule
    await vehicule.save();
}

async function update(id, vehiculeParam) {
    const vehicule = await Vehicule.findById(id);

    // validate
    if (!vehicule) throw 'Vehicule not found';

    // copy vehiculeParam properties to vehicule
    Object.assign(vehicule, vehiculeParam);

    await vehicule.save();
}

async function _delete(id) {
    await Vehicule.findByIdAndRemove(id);
}