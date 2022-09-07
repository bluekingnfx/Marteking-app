import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DarkTheme } from "./Provider/DarkTheme"

const MainApp = () => {
  return <>
  <DarkTheme>
    <App />
  </DarkTheme>
  </>
}


ReactDOM.render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

