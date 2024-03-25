import User from "../models/user.js";

export const  getUser= async (req,res)=>
{
     try
     {
      console.log(req.params)
        const {id}= req.params;
        const user= await User.findById(id)
        res.status(200).json(user)
     }
     catch(err)
     {
        console.log('this is the error from the getuser controller')
        res.status(err.status).json(err.message)
     }
}
export  const getUserFriends = async (req,res)=>
{
     try
     {
           const {id}= req.params
           const user= await User.findById(id)

                  const friends =  await Promise.all(User.friends.map((id)=> User.findById(id)))
                  console.log('this is the all friend of the user list', friends);

                  const formattedfriend= friend.map(({_id,firstname, lastname,location, profilePicture,occupation})=>{return {_id,firstname, lastname,location, profilePicture,occupation}})
                  
           
              return res.status(200).json(formattedfriend)

     }
     catch(err)
     {
        console.log('this is the error from the getUserFriends controller')
        res.status(err.status).json(err.message)
     }
}
export const addRemoveFriend= async (req,res)=>
{
     try
     {
      console.log('hnji bhai yeh add remove friend')
      console.log(req.params)
        const {id}= req.params;
        const{friendId}=req.params

        const user= await  User.findById(id)
        const friend= await User.findById(friendId)

        //to remove the friend from the user as the database is stored the friend database inside the key of friends
       if(user.friends.includes(friendId))
       {
        user.friends= user.friends.filter((e)=> e!==friendId);
        friend.friends= friend.friends.filter((e)=> e!==id)
       }
      //  if(id === friendId)
      //  {
      //    return res.send("you cannot follow yourslef")
      //  }
       // to add the friend in the list of the user so we have to do like this
         else
         {
            user.friends.push(friendId)
            friend.friends.push(id)
         }
         await user.save()
         await friend.save()

         //to send the list in the formetted manner so that it easy for the frontend developer

         const friendss =  await Promise.all(user.friends.map((id)=> User.findById(id)))
         console.log('this is the all friend of the user list', friendss);

         const formattedfriend= friendss.map(({_id,firstname, lastname,location, profilePicture,occupation})=>{return {_id,firstname, lastname,location, profilePicture,occupation}})
         
  
     return res.status(200).json(formattedfriend)
    
     }
     catch(err)
     {
        console.log('this is the error from the addRemoveFriends controller')
        console.log(err)
        res.status(err.status).json(err)
     }
}