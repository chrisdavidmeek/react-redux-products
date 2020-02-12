import React from "react";
import { useSelector } from "react-redux";

function Products(props) {
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);
  const toggle = useSelector(state => state.toggle);
  const [country] = React.useState(user.country);

  const [filter, setFilter] = React.useState(false);

  let sortedList = cart;

  if (filter) {
    sortedList = cart.filter(item => {
      let ret = false;

      if (user.country === "USA") {
        if (item.cost.USA < 7) {
          ret = true;
        }
      } else if (user.country === "CANADA") {
        if (item.cost.CANADA < 7) {
          ret = true;
        }
      } else {
        if (item.cost.UK < 7) {
          ret = true;
        }
      }
      return ret ? item : null;
    });
    sortedList = cart.filter(item => item.name.includes("a"));
  }

  let items = sortedList.map((it, idx) => (
    <div key={idx}>
      <h1>{it.name}</h1>
      <h4>{country === "USA" && "Cost in USA:$" + it.cost.USA}</h4>
      <h4>{country === "CANADA" && "Cost in CANADA:" + it.cost.CANADA}</h4>
      <h4>{country === "UK" && "Cost in UK:" + it.cost.UK}</h4>
    </div>
  ));
  return (
    <div>
      <button onClick={() => setFilter(!filter)}>Filter</button>
      <h3>{toggle ? "I am on" : "I am off"}</h3>
      {sortedList.length === 0 ? "No Items filtered" : items}
    </div>
  );
}

export default Products;
