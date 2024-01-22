import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from "fs";



cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){
            return null;
        }
        cloudinary.uploader.upload(localFilePath, {
            recource_type: "auto"
        })

        console.log("File has been uploaded successfully.", response.url);

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //Remove the locally saved temporary file if the operation got failed

        return null;
    }
}

export {uploadOnCloudinary};
