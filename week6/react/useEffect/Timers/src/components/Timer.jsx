import {useState, useEffect} from "react"

export default function Timer(){
const [cookies, setCookies] = useState(0)

useEffect(() => {
    console.log(`use effect is running 🥳`)

    const myInterval = setInterval(() => {
        console.log('This is the interval running ... 🏃‍♂️')
        setCookies(cookies => cookies + 1)
        }, 1000)

        return () => {
            clearInterval(myInterval)
        }
}, [])

    return(
        <div>
<p>{cookies}</p>
        </div>
    )
}