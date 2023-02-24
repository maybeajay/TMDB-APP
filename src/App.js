import "react-loading-skeleton/dist/skeleton.css";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import MovieList from './Components/MovieList';
import MovieDetail from './pages/MovieDetail/MovieDetail';
function App() {
  return (

    <div className="App">
      <BrowserRouter> 
      <Header /> 
      <Routes>
        <Route index element={<Home />}/>
        <Route path="movie/:id" element={<MovieDetail />}/>
        <Route path="movies/:type" element={<MovieList />}/>
        <Route path="/*" element={<h2>Are you lost?</h2>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
