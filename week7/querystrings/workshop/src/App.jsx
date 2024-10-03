import { Routes, Route, Link } from "react-router-dom";
import Cheese from "./Pages/Cheese"
import SortOrder from "./components/SortOrderForm"

export default function App() {
  
  const arrayOfCheese = [
    'cheddar',
    'gouda',
    'brie',
    'wensleydale',
    'Red Leicester',
    'Feta',
    'mozzarella',
    'cream',
    'parmesan'
  ]

  return (
    <div>
      <h1>Welcome To Cheese Emporium!</h1>
      <p>We Hope Yopu Like Cheese!</p>

     <SortOrder/>

      {arrayOfCheese.map(cheese => {
              return (
                <div>
                    <Link to={`/cheese/${cheese}`}>{cheese}</Link>
                </div>
              )
            })}
      
      <Routes>
        <Route path="/" element={<p>This is the home Page! Learn more about Cheese!</p>}/>
        <Route path='/cheese/:cheeselName' element={<Cheese />}></Route>
      </Routes>
    </div>
  )
}

