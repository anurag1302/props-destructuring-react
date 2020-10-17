Props Destructuring 1:

const Book = (props) => {
  const { img, title, author } = props; //props destructuring
  return (
    <article className="book">
      <img src={img} alt="book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

Props Destructuring 2:

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
