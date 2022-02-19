import React from 'react';
import Home from './Controllers/Home/Home';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
