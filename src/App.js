import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' Component={Login}/>
            <Route path='/home' Component={Home}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
