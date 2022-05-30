import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  const dataDialogs = [
    { name: "Mahmud", id: "1" },
    { name: "Sarvar", id: "2" },
    { name: "Sardor", id: "3" },
    { name: "Mirzohid", id: "4" },
    { name: "Jalolidin", id: "5" },
    { name: "Sadriddin", id: "6" },
  ];

  const dataMessages = ["hi", "hello", "What's up"];

  const renderDialogs = dataDialogs.map((val) => (
    <DialogsItem name={val.name} id={val.id} />
  ));

  const renderMessages = dataMessages.map((val) => (
    <MessagesItem message={val} />
  ));
  return (
    <div className={classes.container}>
      <div className={classes.dialogUsers}>{renderDialogs}</div>
      <div className={classes.dialogUser}>{renderMessages}</div>
    </div>
  );
};

export default Dialogs;
