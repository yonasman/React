import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Mac from './Pages/Mac'
import Iphone from './Pages/Iphone'
import Ipad from './Pages/Ipad'
import Watch from './Pages/Watch'
import Tv from './Pages/Tv'
import Music from './Pages/Music'
import Support from './Pages/Support'
import Four04 from './Pages/Four04';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/mac' element={<Mac/>}/>
        <Route path='/iphone' element={<Iphone/>}/>
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/tv' element={<Tv/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path="*" element={<Four04/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
