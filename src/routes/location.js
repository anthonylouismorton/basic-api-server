'use strict'

const {Locations} = require('../model')

const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator.js');

router.get('/location', async (req, res) => {
  let locationData = await Locations.findAll();
  res.send(locationData);
 });

router.get('/location/:id', async (req, res) => {
  const id = +req.params.id;
  let locationData = await Locations.findOne(id);
  res.send(locationData);
});

router.post('/location', async (req, res) => {
  const locationInfo = req.body
  const newLocation = await Locations.create({
    title: locationInfo.title,
    firstName: locationInfo.firstName,
    lastName: locationInfo.lastName
  })
  res.status(201).send(newLocation)
});

router.put('/location/:id', async (req,res) => {
  const id = +req.params.id
  let foundLocation = await findOne({where: {id}})
  let updatedLocation = await foundLocation.update(
    req.body
  )
  res.status(200).send(updatedLocation)

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