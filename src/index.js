import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

const firstBook = {
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth and Tim Warnes",
  img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UL320_.jpg",
};
const secondBook = {
  title: "Sold on a Monday",
  author: "ristina McMorris",
  img: "https://m.media-amazon.com/images/I/81bD6Ll-seL._AC_UL320_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          suscipit eius dolores eaque enim, a laudantium commodi nobis illum
          assumenda numquam doloribus, voluptatem quae itaque tenetur facilis
          doloremque libero culpa.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="Book image" />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
      {props.children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
