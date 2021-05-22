import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import GlobalFonts from '../assets/fonts/font';

const Write = () => {
  const location = useLocation();
  console.log(location.state);
  const [letter, setLetter] = useState({
    name: location.state.name,
    category: location.state.emotionKorName,
    title: ``,
    letter: ``,
  });
  //제목 배열변수에 담기
  const titleChangeHandler = (event) => {
    event.preventDefault();
    setLetter({ ...letter, title: event.target.value });
    console.log(letter.title);
  };
  //기록 배열변수에 담기
  const letterChangeHandler = (event) => {
    event.preventDefault();
    setLetter({ ...letter, letter: event.target.value });
    console.log(letter.letter);
  };
  return (
    <WriteWrap>
      <GlobalFonts />
      <p className="description">
        "{letter.name}님과의 [{letter.category}] 관련 기억을 떠올려보세요."
      </p>
      <div className="content">
        <div className="content__title">
          <input
            className="content__title--text"
            type="text"
            value={letter.title}
            placeholder="강조하고 싶은 한 문장을 적어주세요."
            max="10"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="content__letter">
          <textarea
            className="content__letter--text"
            type="text"
            value={letter.letter}
            placeholder="여기에 입력하세요."
            onChange={letterChangeHandler}
          ></textarea>
        </div>
      </div>
      <button className="submitButton" type="submit">
        등록
      </button>
    </WriteWrap>
  );
};

export default Write;

const WriteWrap = styled.div`
  font-family: Noto Sans CJK KR;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19.3rem;
  .description {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;

    color: #ffffff;
  }
  .content {
    &__title {
      border-radius: 1.6rem;
      background: white;
      width: 106.5rem;
      height: 6.5rem;
      margin-top: 3.6rem;

      &--text {
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        padding-left: 22.6rem;
        padding-right: 22.6rem;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: black;
      }
    }
    &__letter {
      margin-top: 1.2rem;
      border: 1px solid black;
      border-radius: 10px;
      width: 106.5rem;
      height: 32.4rem;
      border: 2px solid white;

      &--text {
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        padding-top: 2rem;
        padding-left: 2.6rem;
        padding-bottom: 2rem;
        padding-right: 2.6rem;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;

        color: #c1c1c1;
      }
    }
  }
  .submitButton {
    margin-top: 5.6rem;
    width: 11.7rem;
    height: 5rem;
    background: white;
    border-radius: 2.5rem;
    border: none;
  }
  input:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    /* WebKit browsers */
    color: transparent;
  }
  input:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: transparent;
  }
  input:focus::-moz-placeholder,
  textarea:focus::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: transparent;
  }
  input:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: transparent;
  }
`;
