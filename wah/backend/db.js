const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://wah:Wah123@cluster0.cowo7sp.mongodb.net/?retrywrites=true&w=majority'
const mongoDB = ()=>{  
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected Successfully");
    });
}


module.exports = mongoDB