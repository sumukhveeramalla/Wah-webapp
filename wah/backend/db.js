const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sathviknarala2003:Wah123@cluster0.cowo7sp.mongodb.net/?retryWrites=true&w=majority'
const mongoDB = async() =>{
    await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected Successfully');
        // const fetched_data = mongoose.connection.db.collection("food_items");
        // fetched_data.find({}).toArray(function(err, data){
        //     if(err) console.log(err);
        //     else console.log(data);
        // });
    })
    .catch((err) => console.error(err));
}

module.exports = mongoDB;