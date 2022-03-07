'use strict'
//장바구니 수량 고치기

require('dotenv').config()

module.exports = async function (fastify, opts) {
  fastify.put('/:order_id', async (req, reply) => {
    const token = req.headers['authorization']
    const client = await fastify.pg.connect()
    const order_id = req.params.order_id;
    const product_id=req.body.product_idx;
    const quantity=req.body.quantity;

    const user = await client.query('SELECT user_idx from users where token=$1',[token])

    if(user.rows[0]){
    await client.query(
        'UPDATE orders SET quantity='+quantity+' WHERE product_idx = '+product_id )
    const result = await client.query(
        'select * from orders where order_idx = ' +order_id)

      reply
      .code(200)
      .header('content-type','application/json')
      .send(result.rows) 
    }

    else{
        if(token){
            reply.send({message: "잘못된 접근입니다."})
            .code(401)
        }
        else{
            reply.send({message : "로그인이 필요합니다."})
            .code(401)
        }
    }

      console.log(result.rows);
  })
}
