'use strict'

require('dotenv').config()
console.log(process.env)

module.exports = async function (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    //console.log(client)
    const { rows } = await client.query(
      'select * from orders where user_useridx='+1)
    // const{rows1} = await client.query(
    //     'select * from users where user_idx=1')
    //     console.log("userrows===========",{rows1})
     console.log("userrows1===========",{rows})
      reply
      .code(200)
      .header('content-type','application/json')
      .send(rows)
    //return rows
  })
}
//ffffddaddddddddtrrr