import React, {useState} from "react";

const ControledForm = () => {
    const [InputText, setInputText] = useState()
    const [TextError, setTextError] = useState()
   
    const onChangeInput = e => {
setInputText(e.target.value)

if(e.target.value.length > 10){
    setInputText('')
    setTextError('No puedes escribir más caracteres')
}
}
return(
    <form>
        <input value={InputText}
        onChange={onChangeInput}
        type="text"/>
        <h1>TextError</h1>
    </form>
)
}
