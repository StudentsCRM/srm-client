import './App.css';
import Home from './Controllers/Home/Home';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router } from 'react-router-dom';

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
