import './App.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { Home } from './views/home';
import { LoginAsAdmin } from './views/login-as-admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login-as-admin' element={<LoginAsAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
