import React from "react"
import { useSelector,useDispatch } from "react-redux"
import {buyCake} from "../redux"


const HooksCakeContainer = () =>{
  const numOfCakes = useSelector(state =>state.cake.numOfCakes)
  const dispatch = useDispatch()

    return(
        <div>
            <h1>Num of Cakes - {numOfCakes} </h1>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>

        </div>
    )
}


export default HooksCakeContainer