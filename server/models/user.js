import mongoose from 'mongoose';

const { ObjectId} =  mongoose.Schema

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        index:true,
        required:true
    },
    role:{
        type:String,
        default:"subcscriber"
    },
    cart:{
        type:Array,
        default:[]
    },
    address:String,
    // wishlist:[{type: ObjectId, ref:'Product'}]
    
},{timestamps:true})

const userModel = new mongoose.Model('User', userSchema)
export default userModel