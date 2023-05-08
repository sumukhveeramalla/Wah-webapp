const mongoose = require('mongoose')
const { Schema } = mongoose

const FoodItemSchema = new Schema(
    {
        CategoryName:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        options:{
            type:Array
        },
        description:{
            type:String
        }
    }
);

module.exports = mongoose.model('food_item', FoodItemSchema)