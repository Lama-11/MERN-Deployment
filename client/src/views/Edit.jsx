import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PetForm from "../components/PetForm";
const Edit = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    type: "",
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: ""
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`).then((res) => {
      console.log("got results", res);
      setFormInputs(res.data);
    });
  }, [id]);

  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pets/${id}`, formInputs)
      .then((res) => {
        console.log("sending res:", res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  const changeFunction = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    console.log("e.target.type:", e.target.type);

    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <Link to="/"><p>Back to home</p></Link>
      </div>
      <div className="container">
        <h2>Edit {formInputs.name}</h2>
        {errors.map((err, index) => (
          <p style={{ color: "red" }} key={index}>{err}</p>
        ))}
      </div>
      <PetForm
        formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        buttonText={"Edit"}
      />
    </>
  );
};
export default Edit;