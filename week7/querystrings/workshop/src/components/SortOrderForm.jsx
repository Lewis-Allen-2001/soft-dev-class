import { useSearchParams, Link } from "react-router-dom";
import Cheese  from "../Pages/Cheese";

export function SortOrderForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sort')

  if (sort == 'asc') {
      // works very well on most strings - 
      Cheese.sort()
  } else if (sort == 'desc') {
     Cheese.sort().reverse()
  }
  
  return (
    <div>
        <Link to='/Cheese'>Dont sort</Link>
        <br />
        <Link to='/Cheese?sort=asc'>sort by asc</Link>
        <br />
        <Link to='/Cheese?sort=desc'>sort by desc</Link>

        <ul>
            {Cheese.map(cheese => (
                <li key={cheese}>{cheese}</li>
            ))}
        </ul>
    </div>
)
}