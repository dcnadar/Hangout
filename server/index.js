import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import helmet, { crossOriginResourcePolicy } from 'helmet'
import { fileURLToPath } from 'url'
dotenv.config()

//This is to find the directory name of this file
const __filename = fileURLToPath(import.meta.url)
const __dirname= path.dirname(__filename)
const app=  express()

//writing the middleware 
// app.use(express.json())
app.use(express.json())
app.use(helmet())
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))
app.use(morgan("common"))
app.use(cors())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))

// file storage  storing in the  public/assets

const storage= multer.diskStorage(
    {
        destination: (req,file,cb)=>
        {
         cb(null, 'public/assets')
        },
        filename:(req,file, cb)=>
        {
            cb(null, file.originalname)
        }}); 
        
const upload = multer({storage})

const PORT = process.env.PORT || 6001;
console.log(process.env.MONGO_URL);

// Database connection and  run server 
mongoose
 .connect(process.env.MONGO_URL)
    .then(()=>
    {
        console.log('mongodb is connected ');
        app.listen(PORT, ()=>
        {
            console.log(`your server is run at http://localhost:${PORT}`);
        })     
    })
    .catch((err)=>
    {
        console.log('unable to connect the mongodb');
        console.log(err);
        
    })

