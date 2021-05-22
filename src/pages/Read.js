import React from 'react';
import styled from 'styled-components';

const Read = () => {
  const letter = `여기에는 이제 다른 사람이 나한테 써준 내용이 들어오는 건데 그런 건데 여기에 뭘 써야 될지 모르겠어서 이렇게 주저리주저리 말이 많았네요. 빠잉`;
  return (
    <ReadWrap>
      <img className="logo" src="" alt=""></img>
      <div className="content">
        <p className="content__letter">{letter}</p>
      </div>
      <button type="submit">돌아가기</button>
    </ReadWrap>
  );
};

export default Read;

const ReadWrap = styled.div`
  .logo {
  }
  .content {
    &__letter {
      border: 1px solid black;
      border-radius: 10px;
      width: 70%;
      height: 10%;
    }
  }
`;
