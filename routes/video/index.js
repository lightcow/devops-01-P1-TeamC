'use strict'

//const order = require('../../model/video.js')
//const { readAll, readOne }= require('../../model/video.js')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
    //const promises = this.mongo.db.collection('cozstory')
    //const result = await readAll(this.mongo)
    
    const client = await fastify.pg.connect()
    const { rows } = await client.query(
      'SELECT * FROM videos',
    )
    client.release()
    //return rows

    reply
      .send(rows)
      .code(200)
      .header('Content-Type', 'application/json')


    //복사 붙여넣기 
    //onConnect 
    //query >> reply.send >> []빈칸
    //acync 를 빼기 
     
  })

  fastify.get('/:id', async function (request, reply) {

      const id = request.params.id;

      const client = await fastify.pg.connect()

      const videos = await client.query(
        'SELECT * FROM videos WHERE video_idx =$1', [id]
       )
        
      const products = await client.query(
        'SELECT * FROM products WHERE video_idx =$1', [id]
      )
      client.release() 

      //x맞지않다 
      

      console.log('==============videos===============')
      console.log(videos.rows)
      console.log('==============rows===============')
      console.log(products.rows);
      console.log('==============result===============')
      
      
      var resultObj={};
      resultObj['video']=videos.rows[0];
      resultObj['products']=products.rows;

      console.log(resultObj)

      //video.rows 
      
      //query 문에서 join으로 결과값을 받아오는것이 좋음 > db에서 결과값을 받아오는게 best 

      //객체 안에 배열 넣기 
      //객체 안에 값 추가하기 << 객체에서 뽑아내기

      //어떻게 쓸것인가????구조네네네 

      //구조판단하기 

    reply
      .send(resultObj)
      .code(200)
      .header('Content-Type', 'application/json')

  })

}
