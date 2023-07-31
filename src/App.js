import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
// import Stories from './components/Stories';
import Login from './components/Login';
import Navbar from './components/Navbar';
// import Profil from './components/Profil';
// import SideBar from './components/SideBar';
function App() {
  return (
    <div className="container">
      {/* <Login /> */}
      {/* <Navbar /> */}
      {/* <Profil /> */}
      {/* <Footer /> */}
      {/* <Stories /> */}
      {/* <SideBar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Navbar />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
