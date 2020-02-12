import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  const [load, setLoad] = React.useState("Loading");
  const [rend, setRend] = React.useState({
    img: false,
    spin: true,
    error: false
  });

  const [seconds, setTime] = React.useState(0);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTime(seconds + 1);

      if (load) {
        if (props.imageurl === null) {
          setRend({
            img: false,
            spin: false,
            error: true
          });
        } else {
          setRend({
            img: true,
            sping: false,
            error: false
          });
        }
      } else {
        if (seconds > 3) {
          setRend({
            img: false,
            spin: false,
            error: true
          });
        } else {
          setRend({
            img: false,
            spin: true,
            error: false
          });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rend, seconds, load]);

  return (
    <div className="card">
      {rend.img && (
        <img
          onLoad={() => setLoad(true)}
          onError={() => setLoad(false)} //these are special attributes you can add to image tags
          src={props.imageurl}
        ></img>
      )}
      {rend.spin && <FontAwesomeIcon icon={faSpinner} spin />}
      {rend.error && <FontAwesomeIcon icon={faExclamationCircle} />}
    </div>
  );
};

export default Card;
