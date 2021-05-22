import React from 'react';
import styled from 'styled-components';

const Read = () => {
  const name = `다나`;
  const category = `행복`;
  const title = `이건 제목이에요`;
  const letter = `여기에는 이제 다른 사람이 나한테 써준 내용이 들어오는 건데 그런 건데 여기에 뭘 써야 될지 모르겠어서 이렇게 주저리주저리 말이 많았네요. 빠잉`;
  return (
    <ReadWrap>
      <img className="logo" src="" alt=""></img>
      <p className="description">
        {name}님과의 {category}한 기억을 떠올려보세요.
      </p>
      <div className="content">
        <div className="content__title">
          <p className="content__title--text">{title}</p>
        </div>
        <div className="content__letter">
          <p className="content__letter--text">{letter}</p>
        </div>
      </div>
      <button type="submit">등록</button>
    </ReadWrap>
  );
};

export default Read;

const ReadWrap = styled.div`
  .logo {
  }
  .description {
  }
  .content {
    &__title {
      border: 1px solid black;
      border-radius: 10px;
      width: 70%;
      height: 10%;
    }
    &__letter {
      border: 1px solid black;
      border-radius: 10px;
      width: 70%;
      height: 10%;
    }
  }
`;
