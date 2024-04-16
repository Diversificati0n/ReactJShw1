import React from 'react';
import './App.css';
import Message from './Message'; 

function App() {
  return (
    <div className="App">
      <h1>Пример использования компонента Message</h1>
      <Message text="Привет, мир!" />
      <Message text="компонент в React!" />
    </div>
  );
}

export default App;
