import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/816HBXHJsaL._AC_UY218_.jpg",
  title: "React.js Book: Learning React JavaScript Library From Scratch",
  author: "Greg Sidelnikov",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71vlPquePfL._AC_UL320_.jpg",
  title: "Pro C# 7: With .NET and .NET Core",
  author: "Andrew Troelsen",
};
function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt="book"></img>
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// const Book = (props) => {
//   const { img, title, author } = props; //props destructuring
//   return (
//     <article className="book">
//       <img src={img} alt="book"></img>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
