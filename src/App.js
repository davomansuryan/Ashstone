import React, { useState } from 'react';
import HeaderTop from './components/HeaderTop/HeaderTop'
import HeaderNav from './components/HeaderNav/HeaderNav';
import Posts from './components/Posts/Posts';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <HeaderTop searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <HeaderNav />
      <Posts searchTerm={searchTerm} />
    </>
  );
}

export default App;
