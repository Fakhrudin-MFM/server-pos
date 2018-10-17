// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'db_expressboilerplate'
    },
    migrations:{
      directory:__dirname+ '/db/migrations',
    },
    seeds:{
      directory:__dirname+ '/db/seeds',
    }
  },

};
