import Home from './home/Home'
import Nav from './nav/Nav'
import Routes from './routers'
import Rodape from './footer/Rodape.jsx'
import GlobalStyles from './styles/GlobalStyles'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        
          <HashRouter>
            <Home/>
            <Nav/>
           
            <Routes/>
            <GlobalStyles/>
            <Rodape/>
          
          </HashRouter>
      
    </div>
  );
}

export default App;
