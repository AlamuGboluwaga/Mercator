
import React, { useState } from 'react';

import Home from './Home';
const Logout =()=>{
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleShowContent}>Show Content</button>
      {showContent && <Home />}
    </div>
  );
}

export default Logout;