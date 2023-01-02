import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App text-white overflow-hidden">
        <Header/>
        <Hero/>
        <Cards/>
        <Experience/>
        <Search/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default App;
