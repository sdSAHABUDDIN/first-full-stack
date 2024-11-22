import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    unique:true,
  },

},{timeStamp:true})

export const User=mongoose.model('User',userSchema)

// exports.User=User