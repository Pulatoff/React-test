import React from "react";
import { Link } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div>
      <Link to={"?id=" + props.id}>{props.name}</Link>
    </div>
  );
};

export default DialogsItem;
