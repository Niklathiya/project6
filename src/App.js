import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import {
  Routes, Route
} from "react-router-dom"
import Register from "./Register";
import Login from "./Login";
import Feedback from './Feedback';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
