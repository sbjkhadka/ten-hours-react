import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth and Tim Warnes",
    img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg",
  },
  {
    id: 2,
    title: "Sold on a Monday",
    author: "ristina McMorris",
    img: "https://m.media-amazon.com/images/I/81bD6Ll-seL._AC_UL320_.jpg",
  },
  {
    id: 3,
    title: "Love You Forever",
    author: "Robert Munsch and Sheila McGraw",
    img: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UL320_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  // attribute, event handler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World");
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

ReactDom.render(<BookList />, document.getElementById("root"));
