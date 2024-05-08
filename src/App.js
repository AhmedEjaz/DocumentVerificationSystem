import './App.css';
import HomePage from './pages/Home/home';
import {
  BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import LoginPage from './pages/Login/Login.js';
import CustomerPage from './pages/Customer/customer.js';
import AdminPage from './pages/Admin/Admin.js';
import AdminLoginPage from './components/Admin/AdminLogin.js';
import AdminAboutPage from './pages/Admin/AdminAbout.js';

function App() {
  return (
    <div>
      
      <Router>
        
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
          </Routes>
          <Routes>
            <Route exact path="/login" element={<LoginPage/>}/>
          </Routes>
          <Routes>
            <Route exact path="/uploader" element={<CustomerPage/>}/>
          </Routes>
          <Routes>
            <Route exact path="/admin" element={<AdminLoginPage/>}/>
          </Routes>
          <Routes>
            <Route exact path="/adminhome" element={<AdminPage/>}/>
          </Routes>
          <Routes>
            <Route exact path="/adminabout" element={<AdminAboutPage/>}/>
          </Routes>
    
      </Router>
    </div>
  );
}

export default App;
