import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import LogInPage from './pages/login/LoginPage';
import SignUpPage from './pages/signUp/SignUp';

function App() {
  return (
    <div className="App">
       <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route path="/login" element={<LogInPage/>}/>
     <Route path="/signUp" element={<SignUpPage/>}/>
     <Route path='*' element={<LandingPage/>} />
    </Routes>

    </div>
  );
}

export default App;
