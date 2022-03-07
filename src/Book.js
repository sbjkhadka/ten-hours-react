import React from "react";
import { greeting } from "./testing/testing";

const Book = (props) => {
  const clickHandler = () => {
    alert(greeting);
  };
  const complexExample = (author) => {
    console.log(author);
  };
  const { img, title, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Book image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {props.children}
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
