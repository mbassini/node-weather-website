import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Weather from './views/Weather';
import About from './views/About';
import Help from './views/Help';
import Error from './views/Error';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


const App = () => {
  
  return (
    <Router>
      <div className="App">

        <Header title='Header' />
          
        <Routes>
            <Route exact path='/' element={<Weather/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='*' element={<Error/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
