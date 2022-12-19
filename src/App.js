import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {RouterRoot} from './routes/RouterRoot'
function App() {
  return (
    <div className="App">
      <Link  to="/">
        Sign In Page
      </Link>
      <Link  to="/home" >
        Home Page
      </Link>
      <Link to="/account">
        Account Page
      </Link>
        <RouterRoot />

    </div>
  );
}

export default App;
