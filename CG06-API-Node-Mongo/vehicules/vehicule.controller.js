const express = require('express');
const router = express.Router();
const vehiculeService = require('./vehicule.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    vehiculeService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    vehiculeService.getAll()
        .then(vehicules => res.json(vehicules))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    vehiculeService.getById(req.vehicule.sub)
        .then(vehicule => vehicule ? res.json(vehicule) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    vehiculeService.getById(req.params.id)
        .then(vehicule => vehicule ? res.json(vehicule) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    vehiculeService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    vehiculeService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}