import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TypeTester from './components/TypeTester'
import CharacterMap from './components/CharMap'
import Download from './components/Download'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <header>
            <h1>Boxy Foundry.</h1>
          </header>
          <Hero />
          <TypeTester />
          <CharacterMap />
          <Download />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App