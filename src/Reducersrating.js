const Reducerrating=(state=0,action)=>{
    if(action.type==="SETRATING"){
        return action.payload
    }
    else return state

}
export default Reducerrating