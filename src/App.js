import React, { useState } from 'react';


import './App.scss';


import FirstComp from './properties/FirstComp';
import Counter from './modules/Counter';
import ScreenModify from './modules/ScreenModify';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

const probj = {
  name:"Demo Props",
  type:"object",
  purpose:"Dynamic"
}

// const [PopularFood, setPopularFood] = useState(Popular)
// console.log(Popular)

function App() {
  return (
   <div>
      <Home />
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
