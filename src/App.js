import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/">404 not Found</Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
