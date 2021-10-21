'use strict'

class Collection{
  constructor(model) {
    this.model = model;
  }
  //id = squelize identifier
  async read(id, options = {}) {
    try {
      let records = null;
      if(id){
        options['where'] = id;
        records = await this.model.findOne(options);
      }
      else{
        records = await this.model.findAll(options)
      }
      return records;
    }
    catch(e) {
      return e;
    }
  }

  async create (json) {
    try {
      let record = await this.model.create(json)
      return record;
    }
    catch(e) {
      return e;
    }
  }

  async update () {
    try {
      let record = await this.model.update.findOne({where: {id}})
      let updatedRecord = await record.update(json)
      return updatedRecord;
    }
    catch(e) {
      return e;
    }
  }

  async delete (id) {
    try {
      let deletedRows = await this.model.destroy({where: {id}})
      return deletedRows;
    }
    catch(e) {
      return e;
    }
  }
}

module.exports = Collection;