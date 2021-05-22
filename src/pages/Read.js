import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import icStar from '../assets/icons/star.svg';

const Read = () => {
  // 기록된 내용을 넣을 변수 선언
  const letter = `뒷풀이에서 처음 만났을 때 잘 챙겨준 거 너무 감동이었어요. 다 새로운 사람들이고 내성적인 성격이라 낯을 가리는데 이 분위기에 편하게 적응할 수 있도록 도와줬어요! 덕분에 원래보다 훨씬 빠르게 사람들과 가까워질 수 있었던 것 같아요ㅎㅎㅎ 소극적인 친구들까지 두루두루 챙기는 모습에 많이 감동받고 갑니다!!!`;
  // const history = useHistory();
  // const handleClick = () => {
  //   history.push('/1/')
  // }
  return (
    <ReadWrap>
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
