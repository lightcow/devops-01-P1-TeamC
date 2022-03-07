'use strict'

require('dotenv').config()

const path = require('path')
const AutoLoad = require('fastify-autoload')



module.exports = async function (fastify, opts) {

  //**환경변수 */
  //ID
  //PASSWORD 
  const url =process.env.ELEPHANTSQL_URL

  const id = process.env.MONGODB_ID
  const password = process.env.MONGGODB_PASSWORD

  //fastify-postgres
  fastify.register(require('fastify-postgres'), {
    connectionString: url
    //postgres://ugedznlg:2-vw48oBpVqjULV9dCuvSB8fFHZsa2z3@arjuna.db.elephantsql.com/ugedznlg
    //id password 가 암호화 되어있음??
  })

  fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
    forceClose: true,
    
    url: 'mongodb://'+id+':'+password+'@cluster0-shard-00-00.7nh30.mongodb.net:27017,cluster0-shard-00-01.7nh30.mongodb.net:27017,cluster0-shard-00-02.7nh30.mongodb.net:27017/cozstory?ssl=true&replicaSet=atlas-ybs0vb-shard-0&authSource=admin&retryWrites=true&w=majority'
    //*** 환경변수로 변환해야함
  
  })

  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
