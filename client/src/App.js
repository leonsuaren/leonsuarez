import './App.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { AdminLogedInProvider } from './context/AdminLogedIn';
import { Home } from './views/home';
import { LoginAsAdmin } from './views/login-as-admin';

function App() {
  return (
    <div className="App">
      <AdminLogedInProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login-as-admin' element={<LoginAsAdmin />} />
          </Routes>
        </Router>
      </AdminLogedInProvider>
    </div>
  );
}

export default App;
