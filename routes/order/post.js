'use strict'

require('dotenv').config()
console.log(process.env)

module.exports = async function (fastify, opts) {
    fastify.get('/', (req, reply) => {
        fastify.pg.connect(onConnect)
      
        function onConnect (err, client, release) {
          if (err) return reply.send(err)
      
          client.query( 
            'SELECT 1+1', [],
            function onResult (err, result) {
              release()
              reply.send(result)
            }
          )
        }
      })
}
//ffffddaddddddddtrrr