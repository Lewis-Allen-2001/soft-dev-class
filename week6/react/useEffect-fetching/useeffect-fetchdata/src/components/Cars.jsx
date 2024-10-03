
const Cars = [
  {
    Car: "Nissan",
    Model: "1999 R34 Skyline",
    TopSpeed: "154.7 MPH"
  },
{
    Car: "Toyota",
    Model: "MK4 Supra twin turbo",
    TopSpeed: "160 MPH" 
},
{
    Car: "Lamborghini",
    Model: "1989 Countach",
    TopSpeed: "183 MPH" 
}
  ];

  export default function App(){
    return(
        <div>
            <h1>Cars!</h1>
            <ul>
                {Cars.map((Cars) => (
                    <li key= {Cars ()}>
{Cars.Car [0] }



                    </li>
                ))}
            </ul>
        </div>
    )
  }