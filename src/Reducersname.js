const Reducername=(state="",action)=>{
    if(action.type==="SETNAME"){
        return action.payload
    }
    else return state

}
export default Reducername