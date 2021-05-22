import React, { useState } from 'react';
import styled from 'styled-components';

const Write = () => {
  const [letter, setLetter] = useState({
    name: `다나`,
    category: `행복`,
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
      <img className="logo" src="" alt=""></img>
      <p className="description">
        {letter.name}님과의 {letter.category}한 기억을 떠올려보세요.
      </p>
      <div className="content">
        <div className="content__title">
          <input
            className="content__title--text"
            type="text"
            value={letter.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="content__letter">
          <textarea
            className="content__letter--text"
            type="text"
            value={letter.letter}
            onChange={letterChangeHandler}
          ></textarea>
        </div>
      </div>
      <button type="submit">등록</button>
    </WriteWrap>
  );
};

export default Write;

const WriteWrap = styled.div`
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
