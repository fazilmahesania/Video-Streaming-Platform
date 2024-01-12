import mongoose from "mongoose";
import { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, //Cloudnary url
            required: true
        },
        thumbnail:{
            type: String, //Cloudnary url
            required: true
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        duration:{
            type: Number, // Duration will be taken from Cloudnary
            required: true
        },
        views:{
            type: Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps:true
    }
)



export const Video = mongoose.model("Video", videoSchema)