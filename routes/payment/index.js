'use strict'

//const order = require('../../model/video.js')
//const { readAll, readOne }= require('../../model/video.js')

module.exports = async function (fastify, opts) {
  fastify.put('/:order_id', async function (request, reply) {
    
    const client = await fastify.pg.connect()
    // const { rows } = await client.query(
    //   'UPDATE orders * SET ordered=true WHERE order_idx = $1', [request.params.order_id]
    // )

    // const results = await client.query(
    //     'select o.order_idx, o.product_idx, quantity, product_name, product_img, ordered from orders as o JOIN products as p ON o.product_idx = p.product_idx where o.order_idx=$1', [request.params.order_id] 

    // }

    const token = request.headers['authorization'] // token 가져옴 \
    console.log('ddddddddd--token')
    console.log(request.headers['authorization'])

    const user = await client.query('SELECT user_idx from users where token=$1',[token])

    //client.release()
    console.log('token입니다')
    console.log(token)
    console.log('dddddd')
    console.log(user.rows);
       
    if(user.rows[0]){//토큰이 존재하고 user 가 있을때 

        const { rows } = await client.query(//orders를 업데이트한다.
            'UPDATE orders * SET ordered=true WHERE order_idx = $1', [request.params.order_id]
          )
      
        const results = await client.query(//결과값을 출력해서 send 한다 
            'select o.order_idx, o.product_idx, quantity, product_name, product_img, ordered from orders as o JOIN products as p ON o.product_idx = p.product_idx where order_idx=$1', [request.params.order_id] 
          )
          console.log("-------------------------------")
          console.log(request.params.order_id)
        client.release()
        //return rows

        reply
        .send(results.rows)
        .code(200)
        .header('Content-Type', 'application/json')


    }else{//token x 

        if(token){
            //1. 토큰이있는데 사람이 없다 --> 토큰틀림 다시 로그인해라
            reply.send({message : "잘못된 접근입니다."}).code(401)


        }else{
            reply.send({message : "로그인이 필요합니다."}).code(401)

        }


        //if(token) ==> 401 unautorized ==> reply.code(401).send({message : "잘못된 토큰입니다."})
        //2. 토큰이 없다 --> 로그인안됨 로그인해라 
        //else{ reply.code(401).send({message : "로그인이 필요합니다."}) }
    }

})

}
    
    //결과값 조인 쿼리
    // --->>>> 


    //header authorization
    //user_idx id    name    token
    //1        yuni 윤유원    ******??
    //2        admin 관리자   **??


    //post, get orders> 사용자 확인 후 불러와야하는것 
    //header authorization 에 token 을 넣어서 
    //reqeust.?? >> autprization token 값 어떻게 가져올 수 있는지 
    //id select token from users where id = request.params.id
    //token == token 일치할때 
    // ==> 시작 

    //1. DB에 토큰 저장 

    //2. 토큰을 이용해서 사람을 찾음 
    //select id from users where token=${token값}> header에서 받은 값 

    //3.authorization header 작성 
    // postman Authoriation header에 token을 넣는다 
    
    //4. const token = request.headers['authorisation']
    //select user_idx from users where token= token 
    // user_idx를 찾을 수 있음 

    //token이 존재하지 않을때, 권한 x
    //js find() 내장함수 -> 배열에서 값뽑아오기 
    
    //5. if(user가 존재할때){
    // select 장바구니 
    // where user_idx = ${user_idx} --> user_idx 가 일치하는 장바구니 목록만 출력                                                                  
    //}
    // else{로그인하세요 알려줌
        //1. 토큰이있는데 사람이 없다 --> 토큰틀림 다시 로그인해라
        //if(token) ==> 401 unautorized ==> reply.code(401).send({message : "잘못된 토큰입니다."})
        //2. 토큰이 없다 --> 로그인안됨 로그인해라 
        //else{ reply.code(401).send({message : "로그인이 필요합니다."}) }
        //}


    //oauth2 >> 인증 (sns 로그인인증 공식문서 참고)




    // client.release()
    // //return rows

    // reply
    //   .send(results.rows)
    //   .code(200)
    //   .header('Content-Type', 'application/json')


    //복사 붙여넣기 
    //onConnect 
    //query >> reply.send >> []빈칸
    //acync 를 빼기 
     
