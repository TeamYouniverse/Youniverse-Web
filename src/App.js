import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import { Login, Main, Emotion, Read, Write } from './pages';
import getApi from '../src/lib/getApi';

function App() {
  const [paramId, setParamId] = useState('60a945e8d51f5f03a690ca34');
  const [userData, setUserData] = useState({
    status: 'idle',
    data: null,
  });
  console.log(paramId);
  //post로 받은 paramId값을 보내서 userData 받음
  const getData = async (paramId) => {
    try {
      const data = await getApi.getApi(paramId);
      if (data === null) throw Error;
      setUserData({ status: 'resolved', data: data });
    } catch (e) {
      setUserData({ status: 'rejected', data: null });
      console.log(e);
    }
  };

  //paramId값이 정의되면 재렌더링해서 데이터 get 해옴
  useEffect(() => {
    getData(paramId);
  }, [paramId]);

  console.log(paramId);

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login setParamId={setParamId} />}
          />
          <Route
            exact
            path="/:id"
            render={() => <Main userData={userData} />}
          />
          <Route exact path="/:id/happy" component={() => <Emotion />} />
          <Route exact path="/:id/sad" component={() => <Emotion />} />
          <Route exact path="/:id/touching" component={() => <Emotion />} />
          <Route exact path="/:id/sorry" component={() => <Emotion />} />
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
