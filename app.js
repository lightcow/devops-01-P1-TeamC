'use strict'

require('dotenv').config()

const path = require('path')
const AutoLoad = require('fastify-autoload')
const url=process.env.ElEPHANTSQL_URL

module.exports = async function (fastify, opts) {

  //**환경변수 */
  //ID
  //PASSWORD 
  const url =process.env.ELEPHANTSQL_URL

  const id = process.env.ID
  const password = process.env.PASSWORD

  //fastify-postgres
  fastify.register(require('fastify-postgres'), {
    connectionString: url
    //postgres://ugedznlg:2-vw48oBpVqjULV9dCuvSB8fFHZsa2z3@arjuna.db.elephantsql.com/ugedznlg
    //id password 가 암호화 되어있음??
  })

  // Place here your custom code!
  
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  // fastify.register(AutoLoad, {
  //   dir: path.join(__dirname, 'plugins'),
  //   options: Object.assign({}, opts)
  // })

  // This loads all plugins defined in routes
  // define your routes in one of these

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
