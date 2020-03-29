let init=[{name:"fast and firious",img:"https://static.fnac-static.com/multimedia/Images/FD/Comete/121204/CCP_IMG_ORIGINAL/1577507.jpg",rating:3,id:1,descreption:"film 1 is the best"},{name:"the legend",img:"https://www.reelviews.net/resources/img/posters/thumbs/legend_poster.jpg",rating:2,id:5,descreption:"film 5 is the best"}]


const Reducertab=(state=init,action)=>{
if(action.type==="REMOVE"){
    return state.filter(el=>el.id!==action.payload)
}
else if(action.type==="AJOUT"){
    return [...state,action.payload]
}
else if(action.type==="SETFILM"){
    return state.map(el=>el.id===action.payload.id?{...action.payload}:el)
}
else return state
}

export default Reducertab