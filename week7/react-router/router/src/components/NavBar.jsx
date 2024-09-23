import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
<Link to={"/books"}>Books</Link>
<Link to={"/"}>home</Link>
        </div>
    )
}