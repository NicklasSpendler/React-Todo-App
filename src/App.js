import logo from './logo.svg';
import './App.css';

import SideBar from './components/sidebar';

import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
