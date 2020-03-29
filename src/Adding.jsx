import React from 'react';
import {connect} from 'react-redux'


const Add=(props)=>{
    let newmovie={
        name:props.name,
        rating:props.rating,
        img:props.image,
        id:Math.random(),
        descreption:props.descreption
    }  
   console.log(props.tab)
   console.log(props.name)
   console.log(props.rating)
   console.log(props.image)
    return(<div>
        <input type="text" placeholder="name" onChange={(e)=>props.setname(e.target.value)}/>
        <input type="text" placeholder="img" onChange={(e)=>props.setimg(e.target.value)}/>
        <input type="text" placeholder="rating" onChange={(e)=>props.setrating(e.target.value)}/>
        <button onClick={()=>props.ajouter(newmovie)}>ADD FILM</button>
      
    

    </div>)

    }

   const mapDispatchToProps=(dispatch)=>{
        return{
            setname:(input)=>dispatch({type:"SETNAME",payload:input}),
            setrating:(input)=>dispatch({type:"SETRATING",payload:input}),
            setimg:(input)=>dispatch({type:"SETIMAGE",payload:input}),
            ajouter:(input)=>dispatch({type:"AJOUT",payload:input})
        }
    }
    const mapStateToProps=(state)=>{
        return{
            name:state.name,
            rating:state.rating,
            image:state.image,
            tab:state.tab,
            descreption:state.descreption
        }
    }



export default connect(mapStateToProps,mapDispatchToProps)(Add)