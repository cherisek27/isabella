import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'; 
import Main from './components/Main';
import Nav from './components/Nav';
import Mininavbar from './components/Mininavbar';
import Header from './components/Header';
import Collections from './components/Collections';  
import Personal from './components/Personal';
import Publications from './components/Publications';
import Editorial from './components/Editorial'; 
import Film from './components/Film';
import Advertising from './components/Advertising';
import Women from './components/Women';
  
const App = () => 
    <Router history={browserHistory}> 
        <div> 
            <Nav />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/collections" component={Collections} />  
                <Route path="/publications&contact" component={Publications} />
                <Route path="/editorial" component={Editorial} /> 
                <Route path="/film" component={Film} />
                <Route path="/advertising" component={Advertising} />
                <Route path="/women" component={Women} />
                <Route path="/personal" component={Personal} />
            </Switch> 
        </div> 
    </Router>

export default App; 