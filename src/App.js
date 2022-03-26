import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Questions></Questions>
    </div>
  );
}

export default App;
