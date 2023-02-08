import { useEffect, useRef } from "react";


const Modal = (props) => {
    const inputElement = useRef()
    useEffect(function() {
        console.log(inputElement); 
        inputElement.current.focus() 
        setTimeout(() => {
            
        }, 2000);   
    }, [])
    return(
        <div>
        <h3>Вам подобається React?</h3>
        <input onChange={function(event) { 
            if (event.currentTarget.value.toLowerCase() === "так") {
                props.setVisible(false)
            } else {
            }
        }} ref={inputElement}></input>
        </div>
    )

}

export default Modal;