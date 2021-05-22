import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Main, Emotion, Read, Write } from './pages';

function App() {
  const [userId, setUserId] = useState();
  console.log(userId);
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login setUserId={setUserId} />}
          />
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
    </>
  );
}

export default App;
