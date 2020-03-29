const Reducerimage=(state="",action)=>{
    if(action.type==="SETIMAGE"){
        return action.payload
    }
    else return state

}
export default Reducerimage