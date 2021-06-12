import axios from "axios";
import { navigate } from "@reach/router";
import React from 'react';

const DeleteButton = ({ id, name }) => {
  const clickFunction = (id) => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button className="btn btn-danger col-sm-3" onClick={() => clickFunction(id)}>Adopt {name}</button>
    </>
  );
};

export default DeleteButton;