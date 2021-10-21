'use strict'

const {db, Locations} = require('../src/model')
const supertest = require('supertest')
const app = require('../src/app/index.js');
const request = supertest(app.server);


beforeAll(async () => { 
  await db.sync(); // creates tables if they haven't been created yet
});

afterAll(async () => { 
  await db.drop(); // drops all table rows within our database instance
});

describe('Testing our REST methods', () => {
    it('should be able to create a location using POST /location', async () => {
    const response = await request.post('/location').send({
      city: 'Las Vegas', 
      manager: 'Anthony',
    });
    expect(response.body.manager).toBe('Anthony');
    expect(response.body.city).toBe('Las Vegas');
    
  })

  it('should fetch all Locations on GET /location', async () => {
    const response = await request.get('/location');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  })

  it('should fetch one location on GET /location:id', async () => {
    const response = await request.get('/location?id=1');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  })

  it('should be able to update a location', async () => {
    const response = await request.put('/location/1').send({
      city: 'Denver', 
      manager: 'Bryce',
    });

    expect(response.body.city).toBe('Denver')
    expect(response.body.manager).toBe('Bryce')

  })

  it('should delete a record', async () => {
    const response = await request.delete('/location/1');
    expect(response.status).toBe(204)

  })

})

describe('Testing our REST methods', () => {
  it('should be able to create an employee', async () => {
    const response = await request.post('/employee').send({
      title: 'Manager', 
      firstName: 'Anthony',
      lastName: 'Morton',
    });
    expect(response.body.title).toBe('Manager');
    expect(response.body.firstName).toBe('Anthony');
    expect(response.body.lastName).toBe('Morton');

  })

  it('should fetch all employees on GET /employee', async () => {
    const response = await request.get('/employee');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  })

  it('should fetch one employee on GET /employee:id', async () => {
    const response = await request.get('/employee?id=1');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  })

  it('should be able to update an employee', async () => {
    const response = await request.put('/employee/1').send({
      title: 'Manager', 
      firstName: 'Jacob',
      lastName: 'Gregor'
    });
    expect(response.body.title).toBe('Manager')
    expect(response.body.firstName).toBe('Jacob')
    expect(response.body.lastName).toBe('Gregor')


  })

  it('should be able to delete an employee', async () => {
    const response = await request.delete('/employee/1');
    expect(response.status).toBe(204)
 
  })
})

