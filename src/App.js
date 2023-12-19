import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        <Route exact path='/users' element={<Users/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
