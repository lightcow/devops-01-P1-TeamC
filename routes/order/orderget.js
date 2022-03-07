'use strict'

require('dotenv').config()

module.exports = async function (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    const { rows } = await client.query(
      'select * from orders where order_idx = ' +1)
      //쿼리문 여기에
      reply
      .code(200)
      .header('content-type','application/json')
      .send(rows)
  })
}
//userid와 pw가 맞을때 orders에서 userid와 일치한 값을 받아온다
//장바구니전체조회