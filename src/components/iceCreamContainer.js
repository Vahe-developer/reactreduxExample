import React from 'react'
import {connect} from "react-redux"
import { buyIceCream } from "../redux/index"


const IceCreamContainer = (props) =>{
    console.log(props)
return(
    <div>
        <h2>Number of IceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
)

}
const mapStateToProps = state =>{
    return{
        numOfIceCream: state.iceCream.numOfIceCreams
    }
}
const mapDispatch = dispatch =>{
    return{
        buyIceCream:() => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatch
) (IceCreamContainer)