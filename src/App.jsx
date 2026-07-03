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