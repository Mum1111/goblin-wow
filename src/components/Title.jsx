import React from "react";
import titleStyle from "./title.module.scss";



const Title = (props) => {
    const {title} = props
    return <>
        <div className={
           titleStyle.title 
        }>{ title }</div>
    </>
}

export default Title