import Component2 from "./Component2";

function Component1(props){
    console.log(props, 'props')
    return <div>
        <h1>Component 1</h1>
        <Component2 color={props.color} name="My name is Lena"/>
    </div>
}

export default Component1;