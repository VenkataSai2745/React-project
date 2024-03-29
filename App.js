import React from "react";
import ReactDOM from "react-dom/client";


const Title=()=>{
    return(
        <h1>
            This is my title
        </h1>
    )
}
const Heading=()=>{
    return(
        <>
        <Title />
        <h1>Hello React</h1>
        <h2>Hello JSX</h2>
        <h2>Hello Fuctional Compoments</h2>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)
