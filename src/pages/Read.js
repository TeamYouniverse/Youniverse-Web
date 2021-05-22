import React from 'react';
import styled from 'styled-components';
import icStar from '../assets/icons/star.svg';
import GlobalFonts from '../assets/fonts/font';

const Read = () => {
  // 기록된 내용을 넣을 변수 선언
  const letter = `여기에는 이제 다른 사람이 나한테 써준 내용이 들어오는 건데 그런 건데 여기에 뭘 써야 될지 모르겠어서 이렇게 주저리주저리 말이 많았네요.\n빠잉`;
  return (
    <ReadWrap>
      <GlobalFonts />
      <img className="star" src={icStar} alt=""></img>
      <div className="content">
        <p className="content__letter">{letter}</p>
      </div>
      <button className="returnButton" type="submit">
        돌아가기
      </button>
    </ReadWrap>
  );
};

export default Read;

const ReadWrap = styled.div`
  font-family: Noto Sans CJK KR;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13.2rem;
  .star {
    width: 6.1rem;
    height: 10.3rem;
  }
  .content {
    margin-top: 2.9rem;
    width: 106.5rem;
    height: 39.1rem;
    border: 1px solid white;
    border-radius: 10px;
    &__letter {
      padding-top: 3.2rem;
      padding-left: 3.7rem;
      padding-right: 3.7rem;
      padding-bottom: 3.2rem;
      font-family: Noto Sans CJK KR;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;

      color: #c1c1c1;
    }
  }
  .returnButton {
    margin-top: 5.6rem;
    width: 11.7rem;
    height: 5rem;
    background: white;
    border-radius: 2.5rem;
    border: none;
  }
`;
