import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import data from './Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = data.map(item =>{
  return(
    <App
    
      {...item}
      key = {item.key}

    />
  )
})

root.render(
  <React.StrictMode>
    <div className="container">
        {element}
    </div>
  </React.StrictMode>
)