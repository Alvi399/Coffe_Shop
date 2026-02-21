import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
