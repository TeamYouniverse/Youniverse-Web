import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import { Login, Main, Emotion, Read, Write } from './pages';

function App() {
  const [userId, setUserId] = useState();
  console.log(userId);
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login setUserId={setUserId} />}
          />
          <Route exact path="/:id" component={Main} />
          <Route
            exact
            path="/:id/happy"
            component={() => <Emotion emotion="happy" />}
          />
          <Route
            exact
            path="/:id/sad"
            component={() => <Emotion emotion="sad" />}
          />
          <Route exact path="/:id/happy/write" component={Write} />
          <Route exact path="/:id/sad/write" component={Write} />
          <Route exact path="/:id/happy/read" component={Read} />
          <Route exact path="/:id/sad/read" component={Read} />
          <Route path="/">404 not Found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
