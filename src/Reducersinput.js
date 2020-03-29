 const reducers=(state="",action)=>{
     if (action.type==="CHANGER"){
         return action.payload
     }
     else return state

 }
 export default reducers