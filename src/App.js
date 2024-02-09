import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import SfpoposList from './components/SfpoposList.jsx';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
