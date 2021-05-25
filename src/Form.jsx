import React from "react";

const Form = ({ todo, change, submit, error }) => {
  return (
    <>
      <form onSubmit={submit}>
        <div className="form-group d-flex">
          <input
            type="text"
            name="input"
            id="input"
            value={todo}
            onChange={change}
            className="form-control-plaintext col-8 mr-3"
          />
          <button
            type="submit"
            className="btn btn-success col-3 d-flex justify-content-center align-items-center"
          >
            <i className="fas fa-plus fa-sm"></i>&nbsp;Add
          </button>
        </div>
        {error && <small className="form-text text-danger">{error}</small>}
      </form>
    </>
  );
};

export default Form;
