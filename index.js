import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstApp from './FirstApp';
import SecondApp from './SecondApp';
import reportWebVitals from './reportWebVitals';
import ThirdApp from './ThirdApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp/>
    <SecondApp value = {0}/>
    <ThirdApp/>
</React.StrictMode>
)
reportWebVitals();