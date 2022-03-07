'use strict'

require('dotenv').config()

module.exports = async function (fastify, opts) {
  fastify.post('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    // const product_idx=req.body.product_idx;
    const user_id=req.body.user_id;
    const product_id=req.body.product_id;
    const quantity=req.body.quantity;
    const user_idx = await client.query(
        "select user_idx from users where id='"+user_id+"'")
        console.log("=========")
        console.log(user_idx.rows[0].user_idx);
    const insert_order = await client.query(
      'INSERT INTO orders VALUES(default,'+quantity+','+'false'+','+user_idx.rows[0].user_idx+','+product_id+')')
      const send_req = await client.query()
      reply
      .code(200)
      .header('content-type','application/json')
      .send()
  })
}
