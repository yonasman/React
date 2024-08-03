import './App.css';
import Header from './Components/Header/Header';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
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
    </div>
  );
}

export default App;
