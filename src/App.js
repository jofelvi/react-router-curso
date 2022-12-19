import logo from './logo.svg';
import './App.css';
import Maps from './components/GoogleMaps'
import AutoCompleteMaps from "./components/AutoCompleteMaps";


function App() {
  return (
    <div className="App">
      <Maps />
      <AutoCompleteMaps/>
    </div>
  );
}

export default App;
