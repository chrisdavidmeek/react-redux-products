export const setToggle = () => {
  return {
    type: "SET_TOGGLE"
  };
};

export const changeCountry = country => {
  return {
    type: "CHANGE_COUNTRY",
    country: country
  };
};
