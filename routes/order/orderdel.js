'use strict'

require('dotenv').config()
console.log(process.env)


module.exports = async function (fastify, opts) {
  fastify.delete('/:order_idx', async (req, reply) => {
      const token=req.headers['authorization']
      const client = await fastify.pg.connect()
      const user = await client.query('SELECT user_idx from users where token=$1',[token])
      if(user.rows[0])
        {
   
    // const orderidx=req.parms.id;s
    // console.log("del====",orderidx.rows)
    const del_order = await client.query(
      'DELETE FROM orders WHERE order_idx=$1',[req.params.order_idx])
      console.log("=============")
        console.log(req.params.order_idx)
     
      reply
      .code(200)
      .header('content-type','application/json')
      .send({message:"ok"})
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