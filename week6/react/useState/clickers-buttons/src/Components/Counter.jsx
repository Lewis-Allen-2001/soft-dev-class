import { useState } from "react"


export default function ClickerButton(){
    let [count, setCount] = useState(0);

    function handleIncrease(){
        setCount(count + 1)
    }

    function handleDecrease(){
        setCount(count - 1)
    }
  

return(
    <div>     
    <button onClick = {handleIncrease}>+1</button>
    <button onClick = {handleDecrease}>-1</button>
    <p>You clicked {count} times!</p>
    </div>
)


}