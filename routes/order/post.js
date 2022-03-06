'use strict'

require('dotenv').config()
console.log(process.env)

module.exports = async function (fastify, opts) {
  fastify.post('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    // const product_idx=req.body.product_idx;

    // console.log("product_idx----------",product_idx)
    const { rows } = await client.query(
      'INSERT INTO orders VALUES'+'('+6+','+5+','+0+','+7+','+8+')')
      console.log("rows----------",{rows})
      reply
      .code(200)
      .header('content-type','application/json')
      .send()
    
  })
}
//body에서 user_id랑 product_id,quantity를 받아서
//orders에 orders_idx랑 quantity orddered:default0 user_id product_id를 저장하고
//응답으로는 product_id,quantity,product_name,product:img 응답
//