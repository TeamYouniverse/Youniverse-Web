import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Example } from '../assets';
import { Planet } from '../components';

const Emotion = () => {
  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [title, setTitle] = useState([
    '김의진1',
    '안녕하세요2',
    '반갑습니다3',
    '몇살이세요?4',
    '하하하5',
    '노트북6',
    '아이폰7',
    '맥북8',
    '충전기9',
    '에어팟10',
  ]);
  const spanRef = useRef();
  // 글자가 안 보이다가 hover 시, 보이도록 만들고 싶다...
  const handleMouseUp = (e) => {
    e.target.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.childNodes[0].style.opacity = '1')
      : e.target.parentNode.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.parentNode.childNodes[0].style.opacity = '1')
      : null;
  };
  const handleMouseLeave = (e) => {
    e.target.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.childNodes[0].style.opacity = '0')
      : e.target.parentNode.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.parentNode.childNodes[0].style.opacity = '0')
      : null;
  };

  return (
    <EmotionWrap>
      <Planet src={Example} name="행복" size="large" />
      {ids.map((id, index) => (
        <div key={id} className="small">
          <span ref={spanRef} className="title">
            {title[index]}
          </span>
          <div
            onMouseEnter={(e) => handleMouseUp(e)}
            onMouseLeave={handleMouseLeave}
          >
            <Planet src={Example} name="" size="tiny" />
          </div>
        </div>
      ))}
      <span className="text">
        행성을 눌러 OO와 공유했던 감정을 적어보세요. <br />
        별을 누르면 친구들이 쓴 기록을 볼 수 있어요.
      </span>
    </EmotionWrap>
  );
};

export default Emotion;

const EmotionWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40rem;
  text-align: center;
  .text,
  .title {
    margin-top: 5rem;
    color: white;
    font-size: 2rem;
  }
  .title {
    opacity: 0;
  }
  /* .title:hover {
    opacity: 1;
  } */
  /* .small:hover{

  } */

  .small {
    position: absolute;
  }
  .small:nth-child(2) {
    top: -3rem;
    left: -6rem;
  }
  .small:nth-child(3) {
    top: -3rem;
    right: -15rem;
  }
  .small:nth-child(4) {
    bottom: -10rem;
    right: -10rem;
  }
  .small:nth-child(5) {
    bottom: -10rem;
    left: -10rem;
  }
  .small:nth-child(6) {
    bottom: -14rem;
    right: 10rem;
  }
  .small:nth-child(7) {
    bottom: 8rem;
    right: -10rem;
  }
  .small:nth-child(8) {
    bottom: 12rem;
    left: -10rem;
  }
  .small:nth-child(9) {
    bottom: 4rem;
    left: -7rem;
  }
  .small:nth-child(10) {
    bottom: -16rem;
    left: 0rem;
  }
  .small:nth-child(11) {
    bottom: 18rem;
    right: -6rem;
  }
`;
