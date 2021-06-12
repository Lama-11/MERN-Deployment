import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DeleteButton from "./DeleteButton"

const PetDetails = ({ id }) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
      .then(res => setPet(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <>
      <div className="container">
        <div style={{ width: "500px", height: "350px" }} class="card">
          <div class="card-header">
            <h2>Details about: {pet.name}</h2>
          </div>
          <div class="card-body">
            <h4>
              Type:{pet.type}
            </h4>
            <h4>
              Description:{pet.description}
            </h4>
            <h4>
              skill 1:{pet.skillOne}
            </h4>
            <h4>
              skill 2:{pet.skillTwo}
            </h4>
            <h4>
              skill 3: {pet.skillThree}
            </h4>
            <DeleteButton
              id={pet._id}
              name={pet.name} />
          </div>
        </div>
      </div>
    </>

  )
}



export default PetDetails;