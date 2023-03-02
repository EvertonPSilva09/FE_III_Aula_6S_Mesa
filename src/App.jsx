import Card from './components/Card'
import cities from './data/dados'
import './App.css'


function App() {

  return (
    <div className="App">
      {cities.map((citie) =>(
      <Card key={citie.id}
        cidade={citie.city}
        pais={citie.country}
        populacao={citie.population}
        cor={citie.color} />
      ))}
    </div>
  )
}

export default App
