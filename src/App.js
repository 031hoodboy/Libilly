import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './page/Home';
import Shop from './page/Shop';
import Profile from './page/Profile';
import Notice from './page/Notice';
import Contact from './page/Contact';
import Cart from './page/Cart';
import Login from './page/Login';
import Mypage from './page/Mypage';
import About from './page/About';
import Hoodie from './page/Hoodie';

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
          <Route path="/about" component={About} />
          <Route path="/login" component={Login}/>
          <Route path="/mypage" component={Mypage}/>
          <Route path="/hoodie" component={Hoodie} />
      </Switch>
  </BrowserRouter>
  )
}

export default App;