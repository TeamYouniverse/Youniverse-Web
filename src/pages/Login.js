import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import GlobalFonts from '../assets/fonts/font';

// App.js에서 setUserId 값을 받아와서 input에서 받아온 값으로 그 값 저장
const Login = ({ user, setUser }) => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const ChangeHandler = (event) => {
    console.log('뭐가입력됏닝', event.target.value);
    setUserName(event.target.value);
  };
  const inputRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    setUser({
      ...user,
      data: { ...user.data, username: inputRef.current.value },
    });
    history.push('/1');
  };
  return (
    <LoginWrap>
      <GlobalFonts />
      <div className="title">
        나와 너의 감정 공유의 시간을 행성에 기록하다, Youniverse
      </div>
      <p className="element">나만의 우주를 만들어보세요.</p>{' '}
      <p className="element">행성이 감정을 담아둘거예요.</p>
      <p className="element">
        함께 느꼈던 감정을 행성에 기록할 친구들을 Youniverse로 초대할 수 있어요.
      </p>
      <p className="element">우선 우주를 만들러 가볼까요?</p>
      <div className="last">당신의 이름을 알려주세요.</div>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <input
          className="name-input"
          type="text"
          value={userName}
          onChange={ChangeHandler}
          ref={inputRef}
        ></input>
      </form>
      <div className="button" onClick={(event) => onSubmitHandler(event)}>
        확인
      </div>
      <p>우선 우주를 만들러 가볼까요?</p>
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  font-family: Noto Sans CJK KR;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    margin-top: 17.5rem;
    margin-bottom: 8.6rem;
    font-family: Noto Sans CJK KR;
    font-size: 2rem;
    line-height: 3rem;
    color: #ffffff;
  }
  .element {
    margin-bottom: 1.5rem;
    font-family: Noto Sans CJK KR;
    font-size: 2rem;
    line-height: 3rem;
    color: #ffffff;
  }
  .last {
    margin-top: 13rem;
    margin-bottom: 2rem;
    font-family: Noto Sans CJK KR;
    font-size: 2rem;
    line-height: 3rem;
    color: #ffffff;
  }
  form {
    width: 21.2rem;
    height: 5rem;
    background: rgba(255, 255, 255, 0.3);
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 1.5rem;
    margin-bottom: 4.1rem;
  }
  .name-input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 21.2rem;
    height: 5rem;
    font-family: Noto Sans CJK KR;
    font-size: 2rem;
    line-height: 3rem;
    margin-left: 0.5rem;
    color: #ffffff;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10.5rem;
    height: 5rem;
    background: #ffffff;
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 3.05rem;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
    color: #000000;
  }
`;
