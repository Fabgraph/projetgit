
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Input from './componants/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Input/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
