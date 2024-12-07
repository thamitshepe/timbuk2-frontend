import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import './css/style.css';
import './css/manrope.css';


ReactDOM.createRoot(document.getElementById('root')).render(
      <Router>
        <App />
      </Router>
);