
import './App.css';
import Portfolio from './components/Portfolio';
import mypic from './Images/mypic.jpg';
function App() {
  return (
    <div>
      <img src={mypic} alt="profile" class="img"/>
      <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
    <Portfolio/>
    </div>
  );
}

export default App;
