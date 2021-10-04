/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/


import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Course from './Components/Course/Course';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Page from './Components/Page/Page';


// Learn With Ux-Main Web Start
function App() {
  return (
    <div className="App">
      <Router>
{/* Header Part         */}
        <Header></Header>      
        
       <Switch>
        
        <Route path="/home">
{/* Home Part         */}          
          <Home></Home>
        </Route>
        <Route exact path="/">
{/* Home Part         */}            
          <Home></Home>
        </Route>
        <Route path="/about">
{/* About Part         */}            
          <About></About>
        </Route>
{/* Page Part         */}          
        <Route path="/page">
          <Page></Page>
        </Route>
{/* Course Part         */}          
        <Route path="/course">
          <Course></Course>
        </Route>
{/* NotFound Part         */}          
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
        
      </Switch>

{/* Footer Part         */}  
      <Footer></Footer>
      </Router>      
    </div>
  );
}

export default App;
