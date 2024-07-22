import React from 'react';
import StudentCard from './components/StudentCard.jsx';
import './App.css';
import ReactLogo from './assets/eye.svg';


function App() {
  return (
    <div className="App">
      <StudentCard 
        name="G Jayanth" 
        registrationNumber="212221230030"
        photo={ReactLogo}
      />
    </div>
  );
}

export default App;

