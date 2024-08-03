import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionSix from './Components/SectionSix/SectionSix';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';


function App() {
  return (
    <div className="App">
    <Header/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <Footer/>
    </div>
  );
}

export default App;
