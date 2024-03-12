import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import upload from './middleware/multer.js'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import helmet, { crossOriginResourcePolicy } from 'helmet'
import { fileURLToPath } from 'url'
import  register from './controller/auth.js'
import  {createPost} from './controller/createpost.js'

dotenv.config()
import authRoutes from './routes/auth.js'
import userRoutes from './routes/userroutes.js'
import postRoutes from './routes/postroutes.js'
import cookieParser from 'cookie-parser'
import verifyjwt from './middleware/verifyjwt.js'


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
app.use(cookieParser())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))

// file storage  storing in the  public/assets
//you will find this in the multer file middleware folder

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

// uploading file in the backend
// only this route is directly made here because
    app.post('/auth/register', upload.single('image'), register);
    app.post('/posts', verifyjwt, upload.single('image'), createPost)

// creating routes for the others
   app.use('/auth', authRoutes)

//creating the routes for the user getfriend removefriend and other 

app.use('/users', userRoutes)
app.use('/posts',  postRoutes)