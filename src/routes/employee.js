'use strict'

const {Employees} = require('../model')

const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator.js');

router.get('/employee', async (req, res) => {
  let employeeData = await Employees.findAll();
  res.json(employeeData);
 });

router.get('/employee/:id', async (req, res) => {
  const id = +req.params.id;
  let employeeData = await Employees.findOne(id);
  res.send(employeeData);
});

router.post('/employee', async (req, res) => {
  const employeeInfo = req.body
  const newEmployee = await Employees.create({
    title: employeeInfo.title,
    firstName: employeeInfo.firstName,
    lastName: employeeInfo.lastName
  })
  res.status(201).json(newEmployee)
});

router.put('/employee/:id', async (req,res) => {
  const id = +req.params.id
  let foundEmployee = await Employees.findOne({where: {id}})
  let updatedEmployee = await foundEmployee.update(
    req.body
  )
  res.status(200).json(updatedEmployee)
});

router.delete('/employee/:id', async (req, res) => {
  const id = +req.params.id
  await Employees.destroy({
    where: {
      id: id
    }
  })
  res.status(204).send('employee deleted')
  
});

module.exports = router;