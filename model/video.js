const { ObjectId } = require('fastify-mongodb')

module.exports = { // mongo DB 모듈 
  readAll: async (mongo) => { // 글 전부 불러오기 : 배열
    const collection = mongo.db.collection('cozstory')
    const result = await collection.find({}).toArray()
    return result
  }
//   ,
//   readOne: async (mongo, id) => { // 글 하나만 불러오기 : id 로 
//     const collection = mongo.db.collection(process.env.COLLECTION_NAME)
//     const result = await collection.findOne({
//       _id: ObjectId(id)
//     })
//     return result
//   },

//   //DB에다가 함수를 실행해서 create >>>> 
//   createOne: async (mongo, body) => { // 글 하나 작성하기 : body 
//     const collection = mongo.db.collection(process.env.COLLECTION_NAME)

//     const result = await collection.insertOne(body)
//     return result
//   },
//   updateOne: async (mongo, id, body) => { // 글 하나 수정하기 : id & body 
//     const collection = mongo.db.collection(process.env.COLLECTION_NAME)

//     const result = await collection.findOneAndUpdate({
//       _id: ObjectId(id)
//     }, {
//       $set: body
//     })
//     return result
//   },
//   deleteOne: async (mongo, id) => { // 글 하나 삭제하기 : id로 
//     const collection = mongo.db.collection(process.env.COLLECTION_NAME)

//     const result = await collection.findOneAndDelete({
//       _id: ObjectId(id)
//     })
//     return result
//   }
}
