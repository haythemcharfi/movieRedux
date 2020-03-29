import React from 'react';
import {connect} from 'react-redux'
import MovieListt from './Manipulation'


const Descreption=(props)=>{
    return(
    <div>
        {props.tab.filter(el=>el.id==props.match.params.id).map(el=><div><p>{el.descreption}</p></div>)}
    </div>
    )
}



const mapStateToProps=(state)=>{
    return{
    tab:state.tab
    }
}




export default connect(mapStateToProps,null)(Descreption)