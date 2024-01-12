import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required:true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required:true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required:true,
            lowercase: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, //cloudnary url
            required:true
        },
        coverImage:{
            type: String, //cloudnary url
        },
        watchHidtory:[
            {
                type:SchemaType.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps:true
    }
)


export const User = mongoose.model("User", userSchema)