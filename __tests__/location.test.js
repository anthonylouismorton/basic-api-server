// 'use strict'

// const {db, Locations} = require('../src/model')
// const supertest = require('supertest')
// const app = require('../src/app/index.js');
// const request = supertest(app.server);


// beforeAll(async () => { 
//   await db.sync(); // creates tables if they haven't been created yet
// });

// afterAll(async () => { 
//   await db.drop(); // drops all table rows within our database instance
// });

// describe('Testing our REST methods', () => {
//   it('should be able to create a location', async () => {
//     let newLocation = await Locations.create({
//       city: 'Las Vegas', 
//       manager: 'Anthony',
//     })

//     expect(newLocation.id).toEqual(1);
//     expect(newLocation.city).toEqual('Las Vegas')
//     expect(newLocation.manager).toEqual('Anthony')
//   })

//   it('should fetch all Locations on GET /location', async () => {
//     const response = await request.get('/location');
//     expect(response.status).toBe(200);
//     expect(response.body.length).toBe(1);
//   })

//   it('should fetch one location on GET /location:id', async () => {
//     const response = await request.get('/location?id=1');
//     expect(response.status).toBe(200);
//     expect(response.body.length).toBe(1);
//   })

//   it('should be able to update a location', async () => {
//     let updateLocation= await Locations.findOne({where: {id: 1}})
//     let foundLocation = await updateLocation.update({
//       city: 'Las Vegas', 
//       manager: 'Anthony',
//     })
  
//     expect(foundLocation.id).toEqual(1);


//   })

// })

