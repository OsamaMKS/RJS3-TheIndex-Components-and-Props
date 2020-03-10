import React from "react";

function AuthorCard(props) {
  const authors = props.author;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={authors.imageUrl}
            alt={authors.first_name + " " + authors.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{authors.first_name + " " + authors.last_name}</span>
          </h5>
          <small className="card-text">{authors.books.length} books</small>
        </div>
      </div>
    </div>
  );
}
export default AuthorCard;
