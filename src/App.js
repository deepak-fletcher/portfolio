import './App.css';
import NavBar from './components/NavBar';
import { LandingPage } from './components/LandingPage';
import {Skills} from './components/Skills';
function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <LandingPage></LandingPage>
        <Skills></Skills>
    </div>
  );
}

export default App;
