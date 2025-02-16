import logo from './logo.svg';
import {Header} from './componenets/Header';
import ToDos from './componenets/parant-todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToDos />
    </div>
  );
}

export default App;
