import { createSlice } from "@reduxjs/toolkit";
// 01 this is like usuall the state  like use state varible you can change state of under inital state object  from anywhere using the reducers
const initialState={
    mode:'light',
    user:null,
    token:null,
    posts:[]
}

export const authSlice= createSlice(
   {
    name: "auth",
    initialState,
    // 02 reducer is a function only nothing much 
    reducers: 
    {
        // 03 this setMode is a just like a function you have to use it one like setMode() it automattically change the state 
         setMode:(state)=>
         {
            state.mode = state.mode ==="light"? "dark":"light";
         },


     //  04 action in the  reducer function is just like the payload means argument that are passed
         setLogin:(state, action)=>
         {
            state.user= action.payload.user;
            state.token = action.payload.token;
         },
      
         //
         setLogout:(state)=>
         {
            state.user= null
            state.token = null
         },

         setFriends:(state, action)=>
         {
            if(state.user)
            {
                state.user.friends=  action.payload.friends
            }
            else{
                console.error('user did not exist');
                
            }
         },
         
         setPosts:(state, action)=>
         {
            state.posts=state.payload.posts

         },

         setPost:(state, action)=>
         {
           const updatedposts=  state.posts.map((post)=>{
            if(post.id===  action.payload.id) return action.payload.post

            return post

            state.posts= updatedposts
           })

         }

         
    }
   }
)

export const {setMode, setFriends, setLogin, setLogout, setPost, setPosts}= authSlice.actions;
export default authSlice.reducer