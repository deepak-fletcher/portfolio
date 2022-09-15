import './App.css';
import NavBar from './components/NavBar';
import { LandingPage } from './components/LandingPage';
import {Skills} from './components/Skills';
import {Timeline} from './components/Timeline';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <LandingPage></LandingPage>
        <Skills class="m-9 p-10">
        </Skills>
        <Timeline></Timeline>
        <Footer></Footer>
    </div>
  );
}

export default App;
