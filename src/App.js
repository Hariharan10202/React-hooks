import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseState from './Hooks/UseState/UseState';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import UseRef from './Hooks/UseRef/UseRef';
import UseEffect from './Hooks/UseEffecft/UseEffect';
import Parent from './Hooks/UseCallBackandUseMemo/Parent';
import UseReducer from './Hooks/UseReducer/UseReducer';
import Kongu from './NewComponent/Kongu';
import Button from './Hooks/UseCallBackandUseMemo/Button';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/usestate' element={<UseState />} />
        <Route path='/useref' element={<UseRef />} />
        <Route path='/useeffect' element={<UseEffect />} />
        <Route path='/callbackandmemo' element={<Parent />} />
        <Route path='/usereducer' element={<UseReducer />} />
        <Route path='/button' element={<Button />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
