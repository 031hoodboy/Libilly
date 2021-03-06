import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Profile from './page/Profile';
import Notice from './page/Notice';
import Contact from './page/Contact';
import Cart from './page/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>      
          <Route path="/" component={Home} exact/>

          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile}/>

          <Route path="/shop" component={Shop}/>
          <Route path="/notice" component={Notice}/>
          <Route path="/contact" component={Contact}/>

      </Switch>
  </BrowserRouter>
  )
}

export default App;