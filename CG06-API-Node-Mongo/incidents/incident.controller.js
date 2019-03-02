const express = require('express');
const router = express.Router();
const incidentService = require('./incident.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    incidentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    incidentService.getAll()
        .then(incidents => res.json(incidents))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    incidentService.getById(req.incident.sub)
        .then(incident => incident ? res.json(incident) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    incidentService.getById(req.params.id)
        .then(incident => incident ? res.json(incident) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    incidentService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    incidentService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}