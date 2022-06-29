import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Hello/>
          <Message/>
        </p>
      </header>
    </div>
  );
}

export default App;
