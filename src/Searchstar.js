const Searchstar=(state=5,action)=>{
    if(action.type==="star"){
        return action.payload
    }

    else return state

}
export default Searchstar