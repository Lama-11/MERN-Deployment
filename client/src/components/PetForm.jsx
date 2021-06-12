
import React from 'react';
const PetForm = ({
  formInputs,
  changeFunction,
  submitFunction,
  buttonText,
}) => {
  return (
    <>
      <div className="container">
        <form onSubmit={submitFunction}>
          <div className="row">
            <div className="col">
              <div style={{ width: "500px", height: "350px" }} className="card">
                <div className="card-body">
                  <h3 className="card-header">Pet Information  </h3>
                  <label>Pet Name:{" "}</label>
                  <br></br>
                  <input style={{ width: "300px" }}
                    type="text"
                    name="name"
                    value={formInputs.name}
                    onChange={changeFunction}
                  />
                  <br></br>
                  <br></br>
                  <label>Pet Type:{" "}</label>
                  <br></br>
                  <input style={{ width: "300px" }}
                    type="text"
                    name="type"
                    value={formInputs.type}
                    onChange={changeFunction}
                  />
                  <br></br>
                  <br></br>
                  <label>Pet Description:{" "}</label>
                  <br></br>
                  <input style={{ width: "300px" }}
                    type="text"
                    name="description"
                    value={formInputs.description}
                    onChange={changeFunction}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div style={{ width: "500px", height: "350px" }} className="card">
                <div className="card-body">
                  <h3 className="card-header">Skills (Optional) </h3>
                  <label>skill 1:{" "}</label>
                  <br></br>
                  <input style={{ width: "300px" }}
                    type="text"
                    name="skill1"
                    value={formInputs.skill1}
                    onChange={changeFunction}
                  />
                  <br></br>
                  <br></br>
                  <label>skill 2:{" "}</label>
                  <br></br>
                  <input style={{ width: "300px" }}
                    type="text"
                    name="skill2"
                    value={formInputs.skill2}
                    onChange={changeFunction}
                  />
                  <br></br>
                  <br></br>
                  <label>skill 3:{" "}</label>
                  <br></br>
                  <input style={{ width: "300px" }}
                    type="text"
                    name="skill3"
                    value={formInputs.skill3}
                    onChange={changeFunction}
                  />
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-outline-info btn-lg btn-block" type="submit">{buttonText}</button>
        </form>
      </div>

    </>
  );
};

export default PetForm;