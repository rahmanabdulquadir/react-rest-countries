import "./App.css";
import Country from "./components/Country/Country";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
     <Country></Country>
     <Footer></Footer>
    </div>
  );
}
// function LoadCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return(
//     <div>
//       <h2>Visiting Rest countries of the world!</h2>
//       <h3>Available countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
