import { useParams, Outlet } from "react-router-dom"

export default function Cheese() {

    const whole = useParams() 
    const {cheeseName} = useParams()

    console.log(whole)
    console.log(cheeseName)

    return (
        <div>
            <p>The {cheeseName} page!</p>
            <Outlet />
        </div>
    )
}