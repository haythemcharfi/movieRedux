import React from 'react';
import {connect}from 'react-redux'
import { Link } from "react-router-dom";




const Manipulation =(props)=>{
    return(
<div >
    <h3>+</h3>
{props.tab.filter(el=>el.name.toLowerCase().includes(props.input.toLowerCase().trim())&&(el.rating<=props.star)).map((el,i)=><div className="tab" key={i}>
<h2>{el.name}</h2>
<img className="img" src={el.img}/>
<span>{"".padStart(el.rating,"⭐")}</span>

<button onClick={()=>props.setfilm(el.id)}>Edit</button>
<button onClick={()=>props.remove(el.id)}>Remove</button>
<Link to={`Descreption/${el.id}`}>
see description
</Link>
</div>)}
</div>
    )
}

const mapStateToProps=(state)=>{
    return{
        input:state.input,
        star:state.starsearch,
        tab:state.tab
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    remove:(id)=>dispatch({type:"REMOVE",payload:id}),
    setfilm:(id)=>dispatch({
    type:"SETFILM",
    payload:{
      name:prompt('name'),
      img:prompt('image'),
      rating:prompt('rating'),
      id:id
    }
    

    })
    }
}





  
export default connect(mapStateToProps,mapDispatchToProps)(Manipulation)