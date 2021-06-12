import { Link } from "@reach/router";

import PetDetails from "../components/PetDetails";

const Details = ({ id }) => {

  return (
    <>
      <div >
        <Link to="/"><p>Back to home</p></Link>
      </div>
      <PetDetails
        id={id}
      />
    </>
  );
};
export default Details;