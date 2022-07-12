'use strict'

require('dotenv').config()

module.exports = async function (fastify, opts) {
  fastify.post('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    // const product_idx=req.body.product_idx;

    const token=req.headers['authorization']
    const user = await client.query('SELECT user_idx from users where token=$1',[token])

    const user_id=req.body.user_id;
    const product_id=req.body.product_id;
    const quantity=req.body.quantity;
    //Const order_idx="select max(order_idx) from orders" //마지막 인덱스 찾기
    console.log("user_id",user_id);
    console.log("product_id",product_id);
    console.log("quantity",quantity);
  
    // const  max= await client.query(
    //   'select max(order_idx) from orders')
    // console.log("product_idx----------",product_idx)
    //  if(req.body[1]===String)
    //  {
      if(user.rows[0])
        {
      const user_idx = await client.query(
        "select user_idx from users where id='"+user_id+"'")
        console.log("=========")
        console.log(user_idx.rows[0].user_idx);
    const insert_order = await client.query(
      'INSERT INTO orders VALUES(default,'+quantity+','+'false'+','+user.rows[0].user_idx+','+product_id+')')
    const send_req = await client.query(
      'select o.product_idx, quantity, product_name, product_img from orders as o JOIN products as p ON o.product_idx = p.product_idx WHERE user_idx ='+user_idx.rows[0].user_idx +'AND o.product_idx='+product_id)
      //order_idx,quantity,ordered,user_useridx,product_idx
      reply
      .code(200)
      .header('content-type','application/json')
      .send(send_req.rows)
     //}
    }
    else{
      if(token){
          reply.send({message:"wrong"}).code(401)
      }
      else
      {
          reply.send({message:"plz login"}).code(401)
      }
  }
  })
}
//다중 sql문 사용법
//body에서 user_id랑 product_id,quantity를 받아서 여러개 받을수도 있음
//orders에 orders_idx랑 quantity orddered:default0 user_id product_id를 저장하고
//응답으로는 product_id,quantity,product_name,product:img 응답
//알고리즘 생각 여러개body를 받았을때 if(body)수를 구분할수있는가?
//장바구니 담기
