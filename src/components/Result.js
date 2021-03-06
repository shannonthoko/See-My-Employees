import React from "react";


function Result(props) {
  return (
   
    <ul className="list-group">
      {props.all.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.name} className="img-fluid" src={result.picture.large} />
          <strong><p>Name: {result.name.first} {result.name.last}</p></strong>
          <p>Email: {result.email}</p>
          <p>Phone: {result.phone}</p>
        </li>
      ))}
    </ul>

    
  );
}

export default Result;
