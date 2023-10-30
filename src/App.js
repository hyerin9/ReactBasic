import './App.css';
import MyComponent from './components/MyComponent';
import Counter from './js/Counter';
import Say from './js/Say';
import EventPractice from './js/EventPractice';
import Info from './js/Info';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyComponent>여기!</MyComponent>
      <Counter></Counter>
      <Say></Say>
      <EventPractice></EventPractice>
      <Info></Info>
    </div>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    // </Routes>
  );
}

export default App;
