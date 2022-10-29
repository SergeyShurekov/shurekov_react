import React from 'react';
import logo from './logo.svg';
// import './App.css';

import { CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <div className="App">
        <header className="App-header">
          <h1>Вывод бизнеса онлайн</h1>
          <p>
            Если в интернет не выйдешь ты, выйдет твой конкурент
          </p>
        </header>
        <div>
          Cards
          <Button variant='contained'>Заказать</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
