import React from "react";

const ListItem = ({ id, title, delHandler, doneHandler, completed }) => {
  return (
    <>
      <li
        className={`list-group-item d-flex justify-content-between align-items-center text-capitalize ${
          completed ? "bg-success text-white" : ""
        }`}
      >
        {completed ? <del>{title}</del> : title}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-sm btn-danger mr-2"
            onClick={() => {
              delHandler(id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className={
              completed
                ? "btn btn-sm btn-success bg-warning"
                : "btn btn-sm btn-success"
            }
            onClick={() => {
              doneHandler(id);
            }}
          >
            <i className={completed ? "fas fa-undo" : "fas fa-check"}></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
