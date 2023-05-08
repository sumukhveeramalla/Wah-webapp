const mongoose = require('mongoose');
const items = require('./models/FoodItemSchema');
const category = require('./models/FoodCatSchema');
const mongoURI = "mongodb+srv://sathviknarala2003:Wah123@cluster0.cowo7sp.mongodb.net/wah?retryWrites=true&w=majority"
const mongoDB = async()=>{  
    await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async()=> {
        console.log('Connected Successfully');        

        try{
            const data = await items.find({});
            const catData = await category.find({});

            global.food_items = data;
            global.foodCategory = catData;
        }catch(error){
            console.log(error);
        }

    })
    .catch((err) => console.error(err));
}


module.exports = mongoDB