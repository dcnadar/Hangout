import { ApiError } from "../ApiError.js";
import  jwt  from "jsonwebtoken";

export default async function verifyjwt(req,res,next)
{
          try
          {
            let token  =  req.header('Authorization')
            console.log(token, 'this is the tokena')
            // if(!token)
            // {

            //     throw new ApiError(403,'Acess token is not found')
            // }
            if (token.startsWith("Bearer ")) {
              console.log('Token is in Bearer format');
              token = token.replace('Bearer ', '');
          }
            console.log('hnji');
            

            console.log('hnji');
            
             
            const verified= jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) 
          
        
            console.log('verified is ', verified)
            req.user=verified;
            next();
          }
          catch(err)
          {
            console.log('error is  hn bhai direct yaha kaise encountered');
            res.status(err.status).json(err.message)
            
          }
}