import React, { useState } from 'react';
import styled from 'styled-components';
import { Example } from '../assets';
import { Planet } from '../components';

const Emotion = () => {
  const [ids, SetIds] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <EmotionWrap>
      <Planet src={Example} name="행복" size="large" />
      {ids.map((id) => (
        <div key={id} className="small">
          <Planet src={Example} name="" size="tiny" />
        </div>
      ))}
    </EmotionWrap>
  );
};

export default Emotion;

const EmotionWrap = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40rem;
  text-align: center;
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
    bottom: 12rem;
    left: -10rem;
  }
  .small:nth-child(10) {
    bottom: 12rem;
    left: -10rem;
  }
  .small:nth-child(11) {
    bottom: 12rem;
    left: -10rem;
  }
`;
