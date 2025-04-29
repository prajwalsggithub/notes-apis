

const mongoose = require('mongoose');
require('dotenv').config();
exports.connect = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Database Connection Successfull ..")
    )
    .catch((err)=>{
        console.log(err);
        process.exit(1)
    })
}
