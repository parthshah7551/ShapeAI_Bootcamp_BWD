import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card'

function App() {
  return (
    <div className="final">
      <Navbar />
      <div className="carddisplay">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
