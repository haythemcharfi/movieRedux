import React from 'react';
import {connect} from "react-redux"




const Ajouter=(props)=>{
    console.log(props.input)
    console.log(props.star)

    return (
        <div>
            
            <input onChange={(e)=>props.changer(e.target.value)}/>
            <span onClick={()=>props.star(1)}>⭐</span>
            <span onClick={()=>props.star(2)}>⭐</span>
            <span onClick={()=>props.star(3)}>⭐</span>
            <span onClick={()=>props.star(4)}>⭐</span>
            <span onClick={()=>props.star(5)}>⭐</span>
        </div>
    )
}





const mapDispatchToProps=(dispatch)=>{
    return{
        changer:(input)=>dispatch({type:"CHANGER",payload:input}),
        star:(input)=>dispatch({type:"star",payload:input}),
        
    }
}
const mapStateToProps=(state)=>{
    return {
        input:state.input,
        star:state.starsearch
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Ajouter)