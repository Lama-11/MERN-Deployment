import { Link } from "@reach/router";

const Petlist = ({ Pets }) => {


  return (
    <>
      <Link to="/new">Add a pet to the shelter</Link>
      <div className="container">
        <table style={{ width: "700px" }} class="table">
          <thead class="table-info">
            <tr>
              <th scope="col">Pet</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {Pets.length > 0 && Pets.sort((pet, i) => pet.type.localeCompare(i.type)).map((pet, i) => {
            return (
              <tr scope="row">
                <td>
                  <div key={pet._id}>
                    <p>{pet.name}</p>
                  </div>
                </td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/details/${pet._id}`}> Details</Link>  |
                <Link to={`/edit/${pet._id}`}> Edit</Link>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Petlist;