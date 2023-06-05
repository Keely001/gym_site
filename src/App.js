import './App.css';
import Hero from './components/hero/hero.jsx';
import Programs from './components/Programs/Programs.jsx'
import Reasons from './components/Reasons/reasons';
import Plans from './components/Plans/Plans.jsx'

function App() {
  return (
    <div className="App">
    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>

    </div>
  );
}

export default App;
