import axios from "axios";
import { Link, navigate } from "@reach/router";
import { useState } from "react";
import PetForm from "../components/PetForm";

const New = (props) => {
  // 1. create variables and useState
  const [formInputs, setFormInputs] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: ""
  });
  const [errors, setErrors] = useState([]);
  // formInputs.category;
  // 2. useEffect

  // 3. Other Functions
  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pets", formInputs)
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
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  // 4. return
  return (
    <>
      <div>
        <Link to="/"><p>Back to home</p></Link>
      </div>
      <div className="container">
        <h2>Know a pet needing a home?</h2>
        {errors.map((err, index) => (
          <p style={{ color: "red" }} key={index}>{err}</p>
        ))}
      </div>
      <PetForm
        formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        buttonText={"Add Pet"}
      />
    </>
  );
};
export default New;