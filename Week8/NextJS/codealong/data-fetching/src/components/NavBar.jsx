import Link from "next/link"

export default function NavBar(){
    return(
        <nav>
<Link href={"/"}> Home </Link>
<Link href={"/posts"}> Posts </Link>
<Link href={"/AboutUs"}> About us </Link>
        </nav>
    )
}