// src/App.js
import React,{useState} from 'react';
import './App.css';
import UserProfile from './UserProfile';
import Footer from './Footer';
function App() {
  const[count,setCount]=useState(1);
  const value={count,setCount}
  return (
    <div className="App">
   
      <UserProfile value={value}/>
      <Footer value={value}/>
    </div>
  );
}

export default App;
