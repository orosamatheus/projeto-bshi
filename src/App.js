import { Routes } from './routes';


import Header from './components/Header'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes />
    </HashRouter>
  );
}

export default App;
