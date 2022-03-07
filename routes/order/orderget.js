'use strict'

require('dotenv').config()
<<<<<<< HEAD
console.log(process.env)

module.exports = async function (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    const token=req.headers['authorization']
    const client = await fastify.pg.connect()
    const user = await client.query('SELECT user_idx from users where token=$1',[token])
    console.log("==========")
    console.log(user.rows[0])

    if(user.rows[0])
    {
    const { rows } = await client.query(
      'select * from orders where user_idx='+user.rows[0].user_idx)

    // const{rows1} = await client.query(
    //    'select * from users where user_idx=1')
    //   console.log("user0rrows1===========",{rows})
=======

module.exports = async function (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    const client = await fastify.pg.connect()
    const { rows } = await client.query(
      'select * from orders where order_idx = ' +1)
      //쿼리문 여기에
>>>>>>> d8a3eafc8d588c7484e03fb36d3bde82c2de03f9
      reply
      .code(200)
      .header('content-type','application/json')
      .send(rows)
<<<<<<< HEAD
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
    //return rows
  })
  
}
//userid와 pw가 맞을때 orders에서 userid와 일치한 값을 받아온다
=======
  })
}
//userid와 pw가 맞을때 orders에서 userid와 일치한 값을 받아온다
//장바구니전체조회
>>>>>>> d8a3eafc8d588c7484e03fb36d3bde82c2de03f9
