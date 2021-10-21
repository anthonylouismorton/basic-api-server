'use strict';

const { request } = require('express');
const express = require('express')
const router = express.Router();
const {employee2, location2} = require('../model')

const Collection = require('../model/lib/Collection.js')
const modelMap = {
  employee2,
  location2,
}

router.use('/:model', function(req, res, next){

    const model = modelMap(req.params.model);
    if(!model) {
      next('no model found')
    }
    //const method = req.method;
    req.model = model;
    next();
//     switch(method){
//       case 'GET':
//         model.read(req.params.id);
//         break;
//       case 'POST':
//         model.create(req.body)
//         break;
//       case 'PUT':
//         model.update(req.params.id, req.body)
//       case 'DELETE':
//         model.delete(req.params.id);
//         break;
//       default:
//         next('Model Router Error')
//     }
// })
}),


router.get('/:model', async (req, res, next) => {
  const model = req.model;
  let records = await model.read(req.params.id);
  res.send(records)
})

router.get('/:model/:id', async (req, res, next) => {
  const model = req.model;
  const id = req.params.id;
  let record = await model.read(id);
  res.send(record);
})

router.post('/:model', async (req, res, next) => {
  const model = req.model;
  const json = req.body
  let newRecord = await model.create(json);
  res.send(newRecord);
})

module.exports = router;