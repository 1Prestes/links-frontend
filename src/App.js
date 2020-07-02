import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/sign-in">Sign in</Link></li>
            <li><Link to="/sign-up">Sign up</Link></li>
            <li><Link to="/menage/links/create">Create link</Link></li>
            <li><Link to="/menage/links/edit">Edit link</Link></li>
            <li><Link to="/menage/links">Links</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-in"><h1>Sign in</h1></Route>
          <Route path="/sign-up"><h1>Sign up</h1></Route>
          <Route path="/menage/links/create"><h1>Create link</h1></Route>
          <Route path="/menage/links/edit"><h1>Edit link</h1></Route>
          <Route path="/menage/links"><h1>Link</h1></Route>
          <Route path="/home"><h1>Home</h1></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
