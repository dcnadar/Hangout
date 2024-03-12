import { ApiError } from "../ApiError";


export default async function verifyjwt(req,res,next)
{
          try
          {
            let {token } = req.cookies?.token || req.header("Authorization")
            if(!token)
            {
                throw new ApiError(403,'Acess token is not found')
            }

            if(token.startWith("Bearer "))
            {
              token= token.replace('Bearer ', '')
            }
             
            const verified= jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) 
            console.log('verified is ', verified)
            req.user=verified;
            next();
          }
          catch(err)
          {
            console.log('error is encountered');
            res.status(err.status).json(err.message)
            
          }
}