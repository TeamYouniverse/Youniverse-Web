import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Main, Emotion, Read, Write } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/:id" component={Main} />
          <Route
            path="/:id/happy"
            component={() => <Emotion emotion="happy" />}
          />
          <Route path="/:id/sad" component={() => <Emotion emotion="sad" />} />
          <Route path="/:id/happy/write" component={Write} />
          <Route path="/:id/sad/write" component={Write} />
          <Route path="/:id/happy/read" component={Read} />
          <Route path="/:id/sad/read" component={Read} />
          <Route path="/">404 not Found</Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
