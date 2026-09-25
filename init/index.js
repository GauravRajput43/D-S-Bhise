const mongoose  = require("mongoose");
const initdata = require("./data.js");
const client = require("../models/Dsbhise.js")

const Mongo_URL = "mongodb://127.0.0.1:27017/Bhise&co" ;
main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("err in db",err);
})

async function main() {
    await mongoose.connect(Mongo_URL);
}

const initDB = async() =>{
  await  client.deleteMany({});
  await  client.insertMany(initdata.data);
  console.log("data was initioalized");
}

initDB();