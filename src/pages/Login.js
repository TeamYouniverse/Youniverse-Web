import React, { useState } from 'react';
import styled from 'styled-components';

// App.js에서 setUserId 값을 받아와서 input에서 받아온 값으로 그 값 저장
const Login = ({ setUserId }) => {
  const [userName, setUserName] = useState('');
  const ChangeHandler = (event) => {
    console.log('뭐가입력됏닝', event.target.value);
    setUserName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setUserId(userName);
  };
  return (
    <LoginWrap>
      <div>나와 너의 감정 공유의 시간을 행성에 기록하다, Youniverse</div>
      <p>나만의 우주를 만들어보세요. 행성이 감정을 담아둘거예요.</p>
      <p>
        함께 느꼈던 감정을 행성에 기록할 친구들을 Youniverse로 초대할 수 있어요.
      </p>
      <p>우선 우주를 만들러 가볼까요?</p>
      <div>당신의 이름을 알려주세요.</div>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <input
          type="text"
          value={userName}
          onChange={ChangeHandler}
          placeholder="당신의 이름을 알려주세요"
        ></input>
      </form>
      <button onClick={(event) => onSubmitHandler(event)}>확인</button>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
