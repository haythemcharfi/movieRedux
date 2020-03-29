import {createStore,combineReducers} from "redux"
import Reducersinput from './Reducersinput'
import Searchstar from './Searchstar'
import Tableau from './ReducerTab'
import Reducername from './Reducersname'
import Reducerrating from './Reducersrating'
import Reducerimage from './Reducersimage'
 


const Store=createStore(combineReducers({
     input:Reducersinput,
     starsearch:Searchstar,
     tab:Tableau,
     name:Reducername,
     rating:Reducerrating,
     image:Reducerimage
 }))
 export default Store;