import Home from './home/Home'
import Nav from './nav/Nav'
import Routes from './routers'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home/>
        <Nav/>
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default App;
