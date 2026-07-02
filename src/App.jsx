import Hero from './components/Hero'
import TypeTester from './components/TypeTester'
import CharacterMap from './components/CharMap'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Boxy Foundry.</h1>
      </header>
      
      <main>
        <Hero />
        <TypeTester />
        <CharacterMap />
      </main>
    </div>
  )
}

export default App