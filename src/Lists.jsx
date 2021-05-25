import React from "react";
import ListItem from "./ListItem";

const Lists = ({ del, done, todos }) => {
  if (todos.length <= 0) {
    return (
      <>
        <div className="jumbotron d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading text-capitalize text-danger">
            No todo's found!
          </h1>
          <p className="text-capitalize">Add your Own todo</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="listWrap">
        <ul className="list-group">
          {todos.map((todo) => {
            return (
              <ListItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                delHandler={del}
                doneHandler={done}
                completed={todo.done}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Lists;
