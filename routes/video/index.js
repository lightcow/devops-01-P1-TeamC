'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    const responseData = [

        {
            video_idx: 1,
            title: '초보자도 쉽게 배우는 서핑',
            youtube_url: 'https://www.youtube.com/watch?v=f3m_WqxhL4o',
            tag : '서핑보드 패들링'
        },
        {
            video_idx: 3,
            title: '재미있는 서핑 레슨',
            youtube_url: 'https://www.youtube.com/watch?v=BHvaJvWW-L0',
            tag : '리쉬 스펀지보드 하드보드'
        }

    ]

    reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send(responseData)

  })

  fastify.get('/:id', async function (request, reply) {
    //const result = await readOne(this.mongo, request.params)

      const responseData = [//response 데이터 배열

        {//response객체
            video_idx: 1,
            title: '초보자도 쉽게 배우는 서핑',
            youtube_url: 'https://www.youtube.com/watch?v=f3m_WqxhL4o',
            product : [//product 배열객체
         
                { 
                    product_idx : 1,
                    price : 10000,
                    product_name : '서핑보드',
                    product_img : 'url'
                },
            
                { 
                    product_idx : 2,
                    price : 10000,
                    product_name : '서핑리쉬',
                    product_img : 'url'
                }
            ]//배열객체
        
        }//response

      ]

      reply
      .code(200)
      .header('Content-Type','application/json')
      .send(responseData)

  })




}
