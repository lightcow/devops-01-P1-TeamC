'use strict'

require('dotenv').config()
console.log(process.env)

module.exports = async function (fastify, opts) {
  fastify.post('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    // const product_idx=req.body.product_idx;
    const user_id=req.body[0].user_id;
    const product_id=req.body[1].product_id;
    const quantity=req.body.quantity;
    const order_idx="select max(order_idx) from orders" //마지막 인덱스 찾기
    console.log("user_id",user_id);
    console.log("product_id",product_id);
    console.log("quantity",quantity);
  
    // console.log("product_idx----------",product_idx)
    // if(req.body>=2)
    // {
    const { rows } = await client.query(
      'INSERT INTO orders VALUES'+'('+16+','+5+','+0+','+7+','+8+')')
      //order_idx,quantity,ordered,user_useridx,product_idx
      reply
      .code(200)
      .header('content-type','application/json')
      .send()
    // }
  })
}
//다중 sql문 사용법
//body에서 user_id랑 product_id,quantity를 받아서 여러개 받을수도 있음
//orders에 orders_idx랑 quantity orddered:default0 user_id product_id를 저장하고
//응답으로는 product_id,quantity,product_name,product:img 응답
//알고리즘 생각 여러개body를 받았을때 if(body)수를 구분할수있는가?
//장바구니 담기
