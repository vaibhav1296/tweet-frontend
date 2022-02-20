import {Routes, Route} from 'react-router-dom'
import './App.css';
import Feed from './components/Feed';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/post' element={<Post/>}/>

        </Routes>
    </div>
  );
}

export default App;
