import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import ParksRecsList from './components/ParksRecsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Title />
      <ParksRecsList />
      <Footer />
    </div>
  );
}

export default App;
