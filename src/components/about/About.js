import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggle, changeCountry } from "../../redux/actions/setActions";

function About() {
  const [countries] = React.useState(["USA", "CANADA"]);
  const user = useSelector(state => state.user);
  const toggle = useSelector(state => state.toggle);
  const dispatch = useDispatch(setToggle, changeCountry);

  return (
    <div>
      <h1>
        About {user.name} {user.lastName}
      </h1>
      <h3>{user.country}</h3>
      <h3>{toggle ? "I am on" : "I am off"}</h3>
      <button onClick={() => dispatch(setToggle())}>Toggle Powerrr</button>
      <button onClick={() => dispatch(changeCountry("USA"))}>USA</button>
      <button onClick={() => dispatch(changeCountry("CANADA"))}>CANADA</button>
      <button onClick={() => dispatch(changeCountry("UK"))}>UK</button>
    </div>
  );
}

export default About;
