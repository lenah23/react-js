import ColorContext from "../../context";
import {useContext} from 'react'

function Component2(props){
     const data=useContext(ColorContext) 
    return <div> 
        <h1>Component 2</h1>
        <h2>{props.color}</h2>
        <h3>{props.name}</h3>
        <h3>{data}</h3>
    </div>
}

export default Component2;