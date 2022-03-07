'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/product', async function (request, reply) {

    const requestData = [
        {
            id : 1,
            product_name : "gutiar",
        }
    ]
    return requestData
  })
}
