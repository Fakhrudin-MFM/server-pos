const knex = require('../db/knex');
const table = 'kategori';

module.exports = {
  all: (req, res) => {
    knex
      .select()
      .from(table)
      .then(datas => {
        res.json(datas);
      })
      .catch(e => {
        res.send('error here ' + e);
      });
  },
  detail: (req, res) => {
    knex
      .select()
      .from(table)
      .where('id', req.params.id)
      .then(datas => {
        res.json(datas);
      })
      .catch(e => {
        res.send('error here ' + e);
      });
  },
  create: (req, res) => {
    const data = {
      id: req.body.id,
      nama: req.body.nama
    };

    knex(table)
      .insert(data)
      .then(datas => {
        res.send(`success create ${table}`);
      })
      .catch(e => {
        res.send('error here : ' + e);
      });
  },
  update: (req, res) => {
    const data = {
      id: req.params.id,
      nama: req.body.nama
    };

    knex(table)
      .where('id', req.params.id)
      .update(data)
      .then(datas => {
        res.send('success update id : ' + req.params.id);
      })
      .catch(err => {
        res.send('error here : ' + e);
      });
  },
  delete: (req, res) => {
    knex(table)
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.send('success delete id : ' + req.params.id);
      })
      .catch(e => {
        res.send('error here : ' + e);
      });
  }
};
