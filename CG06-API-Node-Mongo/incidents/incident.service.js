﻿const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const Incident = db.Incident;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Incident.find().select();
}

async function getById(id) {
    return await Incident.findById(id).select();
}

async function create(incidentParam) {
    const incident = new Incident(incidentParam);
    // save incident
    await incident.save();
}

async function update(id, incidentParam) {
    const incident = await Incident.findById(id);

    // validate
    if (!incident) throw 'Incident not found';

    // copy incidentParam properties to incident
    Object.assign(incident, incidentParam);

    await incident.save();
}

async function _delete(id) {
    await Incident.findByIdAndRemove(id);
}