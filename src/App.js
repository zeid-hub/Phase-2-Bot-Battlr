import React, { useState } from 'react';
import BotArmy from './components/BotArmy';
import BotCollection from './components/BotCollection';
import './App.css';

function App() {
  const [army, setArmy] = useState([]);
  
  function addToArmy (bot){
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  function removeFromArmy (botId){
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy);
  };

  return (
    <div className="App">
      <h1 className='text-center my-5'>BATTLE BOTS</h1>

      <div className='container'>
        
             <BotArmy army={army} removeFromArmy={removeFromArmy} />
         
      </div>

      <div>
        <BotCollection addToArmy={addToArmy} />
      </div>
    </div>
  );
}

export default App;
