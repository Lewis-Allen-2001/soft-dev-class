import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar">
<Link to={"/trending"}>Trending </Link>

<Link to={"/"}>home</Link>
        </div>
    )
}