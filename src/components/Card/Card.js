import React from "react";
import "./Card.css";

function Card({ id, name }) {
  return (
    <div className="item" key={id}>
      <br />
      <img alt="" src={`https://randomuser.me/api/portraits/men/${id}.jpg`} />
      <br />
      <h4>{name} </h4>
      <br />
    </div>
  );
}

export default Card;
