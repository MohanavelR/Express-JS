const mongodb=require('mongodb')
const Mongoclient=mongodb.MongoClient
const objectID=mongodb.ObjectId
let database;

async function getDatabase(){
    const client= await Mongoclient.connect('mongodb://127.0.0.1:27017')
    database=client.db('library')
    if(!database){
        console.log("Database Not responed.")
    }
    // else{
    //     console.log('Database successfully connected.')
    // }
    return database
}
module.exports={
    getDatabase,
    objectID
}