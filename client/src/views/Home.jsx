import { useEffect, useState } from "react";
import axios from "axios";
import PetList from "../components/PetList";
const Home = (props) => {
  // 1. variables and useState
  const [Pets, setPets] = useState([]);

  //   2. useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log("getting the stuff:", res);
        //   do something with res.data
        setPets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // 4. Return
  return (
    <>
      <h2>These pets are looking for a good home</h2>
      <PetList Pets={Pets} />
    </>
  );
};

export default Home;