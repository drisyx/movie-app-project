import logo from './logo.svg';
import './App.css';
import Cover from './components/Cover';
import { Suggest } from './components/Suggest';
import Watched from './components/Watched';
import Search from './components/Search';
import MovieNavbar from './components/MovieNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cover />} />
        <Route path='/search' element={<Search />} />
        <Route path='/suggest' element={<Suggest />} />
        <Route path='/watch' element={<Watched />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
