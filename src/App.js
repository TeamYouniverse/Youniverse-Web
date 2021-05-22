import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import { Login, Main, Emotion, Read, Write } from './pages';
import getApi from '../src/lib/getApi';
import { postAPI } from './lib/postApi';

function App() {
  const [userId, setUserId] = useState();
  const [paramId, setParamId] = useState();
  const [userData, setUserData] = useState({
    status: 'idle',
    data: null,
  });

  //post로 받은 paramId값을 보내서 userData 받음
  const getData = async (paramId) => {
    try {
      const data = await getApi(paramId);
      if (data === null) throw Error;
      setUserData({ status: 'resolved', data: data });
    } catch (e) {
      setUserData({ status: 'rejected', data: null });
      console.log(e);
    }
  };

  console.log(userId);
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
