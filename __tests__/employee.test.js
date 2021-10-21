'use strict'

const {db, Employees} = require('../src/model')
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
  it('should be able to create an employee', async () => {
    let newEmployee = await Employees.create({
      title: 'Manager', 
      firstName: 'Anthony',
      lastName: 'Morton'
    })

    expect(newEmployee.id).toEqual(1);
    expect(newEmployee.title).toEqual('Manager')
    expect(newEmployee.firstName).toEqual('Anthony')
    expect(newEmployee.lastName).toEqual('Morton')
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
    let updateEmployee= await Employees.findOne({where: {id: 1}})
    let foundEmployee = await updateEmployee.update({
      title: 'Manager', 
      firstName: 'Anthony',
      lastName: 'Morton'
    })
    expect(foundEmployee.id).toEqual(1);


  })

  // it('should be able to delete an employee', async () => {
  //   let id = 1;
  //   let requestedEmployee = await Employees.destroy({
  //     where: {
  //       id: id
  //     },
  //     title: 'Manager', 
  //     firstName: 'Anthony',
  //     lastName: 'Morton'
  //   })
  //   console.log(requestedEmployee)

  //   expect(requestedEmployee).toEqual(undefined);
 
  // })
})

