import { Routes } from './routes';


import Header from './components/Header'
import { AnimeDetailProvider } from "./context/AnimeDetailContext"


function App() {
  return (
      <AnimeDetailProvider>
        <Header />
        <Routes />
      </AnimeDetailProvider>
  );
}

export default App;
