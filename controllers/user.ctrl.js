const knex = require('../db/knex');
const table = 'user'
const uuidv4 = require('uuid/v4')
const date = knex.fn.now();

module.exports = {
  all: (req, res)=>{
    knex.select().from(table)
      .then(datas => {
        res.json(datas)
      })
      .catch(e => {
        res.send('error here ' + e)
      })
  },
  detail: (req, res)=>{
    knex.select().from(table).where('id', req.params.id)
      .then(datas => {
        res.json(datas)
      })
      .catch(e => {
        res.send('error here ' + e)
      })
  },
  create: (req, res)=>{
    const data = {
      id:uuidv4(),
      name:req.body.name,
      email:req.body.email,
    };

    knex(table).insert(data)
    .then(datas =>{
      res.send(`success create ${table}`)
    })
    .catch(e =>{
      res.send('error here : '+ e)
    })
  },
  update: (req, res)=>{
    const data = {
      name:req.body.name,
      email:req.body.email,
      updated_at:date
    };

    knex(table)
    .where('id', req.params.id)
    .update(data)
    .then(datas =>{
      res.send('success update id : '+ req.params.id)
    })
    .catch(err =>{
      res.send('error here : '+ e)
    })
  },
  delete: (req, res) => {
    knex(table)
    .where('id', req.params.id)
    .del()
    .then(() =>{
      res.send('success delete id : '+ req.params.id)
    })
    .catch(e =>{
      res.send('error here : '+ e)
    })
  }
};
