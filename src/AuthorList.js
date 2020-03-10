import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authors = props.authors;
  const AuthorList = authors.map(author => (
    <AuthorCard
      author={author}
      key={authors.first_name + " " + authors.last_name}
    />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{AuthorList}</div>
    </div>
  );
}
export default AuthorList;
