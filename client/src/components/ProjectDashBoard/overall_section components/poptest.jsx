// App.js
import React, { useState } from 'react';
import PopUpWindow from './PopupWindow';

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <div className="App">
      <button onClick={openPopUp}>Open Pop-Up</button>
      <PopUpWindow isOpen={isPopUpOpen} onClose={closePopUp}>
        <h2>Pop-Up Content</h2>
        <p>This is a simple pop-up window component.</p>
      </PopUpWindow>
    </div>
  );
}

export default App;
