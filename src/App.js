import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import { Login, Main, Emotion, Read, Write } from './pages';
import getApi from '../src/lib/getApi';
import postAPI from './lib/postApi';

function App() {
  const [paramId, setParamId] = useState('오하');
  const [userData, setUserData] = useState({
    status: 'idle',
    data: null,
  });

  //post로 받은 데이터는 우선 userName이 들어온 이후 처리할 수 있으므로 비동기 처리, 들어오면 그 useName에 해당하는 데이터로 받은 Id 값(data)을 paramId로 설정해줌
  const postData = async (userName) => {
    try {
      const data = await postAPI(userName);
      console.log(data);
      if (data === null) throw Error;
      setParamId(data.id);
      history.push(`/${paramId}`);
    } catch (e) {
      console.log(e);
    }
  };

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
            render={() => <Login postData={postData} paramId={paramId} />}
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
