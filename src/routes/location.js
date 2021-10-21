'use strict'

const {Locations} = require('../model')

const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator.js');

router.get('/location', async (req, res) => {
  let locationData = await Locations.findAll();
  res.json(locationData);
 });

router.get('/location/:id', async (req, res) => {
  const id = +req.params.id;
  let locationData = await Locations.findOne({where: {id}});
  res.send(locationData);
});

router.post('/location', async (req, res) => {
  const locationInfo = req.body
  const newLocation = await Locations.create({
    city: locationInfo.city,
    manager: locationInfo.manager,
  })
  res.status(201).json(newLocation)
});

router.put('/location/:id', async (req,res) => {
  const id = +req.params.id
  let foundLocation = await Locations.findOne({where: {id}})
  let updatedLocation = await foundLocation.update(
    req.body
  )
  res.status(200).json(updatedLocation)

});

router.delete('/location/:id', async (req, res) => {
  const id = +req.params.id
  await Locations.destroy({
    where: {
      id: id
    }
  })
  res.status(204).send('location deleted')
  
});

module.exports = router;