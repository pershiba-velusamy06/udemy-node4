 const mongoose = require('mongoose');


const ConnectMongoDB=(callBack)=>{
    mongoose.connect('mongodb+srv://pershibavelusamy06:pershiba123@elredmongolearnings.uev0ssg.mongodb.net/').then((client)=>{
        callBack(client)
    }).catch((err)=>{
        console.log( 'MongoDB connection error:',err)
    });
}

module.exports=ConnectMongoDB;

