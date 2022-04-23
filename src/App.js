import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BoxLogin from "./components/BoxLogin/BoxLogin";
import NEO_BOOKS from "./assets/img/NEO_BOOKS.png";
import { AppRouter } from "./Routers/AppRouter";
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
