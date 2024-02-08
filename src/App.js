import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import SfpoposList from './components/SfpoposList.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Title />
      <SfpoposList />
      <Footer />
    </div>
  );
}

export default App;
