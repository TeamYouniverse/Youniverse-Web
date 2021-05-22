import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
