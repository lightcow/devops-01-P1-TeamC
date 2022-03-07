'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/:type/:tag', async function (request, reply) {

    console.log(request.params.type)
    console.log(request.params.tag)

    const type = request.params.type;
    const tag = request.params.tag;
1
    const client = await fastify.pg.connect()
    const search_results = await client.query(
      "SELECT * FROM videos WHERE tag LIKE ('%' || $1 || '%') OR title LIKE ('%' || $1 || '%')", [tag]
    )
    client.release()
    //return rows
    console.log('------------rows-------------')
    console.log(search_results.rows)

    reply
      .send(search_results.rows)
      .code(200)
      .header('Content-Type', 'application/json')

    //복사 붙여넣기 
    //onConnect 
    //query >> reply.send >> []빈칸
    //acync 를 빼기 
     
  })

}
