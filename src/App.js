import './App.css';
import NavBar from './components/NavBar';
import { LandingPage } from './components/LandingPage';
import {Skills} from './components/Skills';
function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <LandingPage class="m-10 p-10"></LandingPage>
        <Skills class="m-9 p-10"></Skills>
    </div>
  );
}

export default App;
