import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App(){
	return(
		<div className='App'>
			<Countries></Countries>
			<Footer></Footer>
		</div>
	)
}
export default App;















// function App() {
//   return(
//     <div className='App'>
//     <LoadCountries></LoadCountries>
//   </div>
//   )
// }
// function LoadCountries(){
//   const[countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1>Load All Countries in 1st</h1>
//       <h4>Total Countries: {countries.length}</h4>
//       {
//         countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//        <h2>Name:{props.name}</h2> 
//        <h3>Population:{props.population}</h3> 
//     </div>
//   )
// }
// export default App;
