import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import { Login, Main, Emotion, Read, Write } from './pages';

function App() {
  const data = {
    status: 200,
    data: {
      id: 1,
      username: '',
      postList: {
        happy: [],
        touching: [],
        sorry: [],
        sad: [],
      },
    },
  };
  const [user, setUser] = useState(data);
  const [emotion, setEmotion] = useState();
  const [src, setSrc] = useState();
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/:id"
            render={() => <Main user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/:id/happy"
            component={() => (
              <Emotion
                user={user}
                setEmotion={setEmotion}
                src={src}
                setSrc={setSrc}
              />
            )}
          />
          <Route
            exact
            path="/:id/sad"
            component={() => (
              <Emotion
                user={user}
                setEmotion={setEmotion}
                src={src}
                setSrc={setSrc}
              />
            )}
          />
          <Route
            exact
            path="/:id/touching"
            component={() => (
              <Emotion
                user={user}
                setEmotion={setEmotion}
                src={src}
                setSrc={setSrc}
              />
            )}
          />
          <Route
            exact
            path="/:id/sorry"
            component={() => (
              <Emotion
                user={user}
                setEmotion={setEmotion}
                src={src}
                setSrc={setSrc}
              />
            )}
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
