const initState = {
  toggle: false,
  user: {
    name: "Chris",
    lastName: "Meek",
    country: "USA"
  },
  cart: [
    {
      id: "123",
      name: "Diapers",
      text: "hello",
      cost: {
        USA: 6.99,
        CANADA: 10.99,
        UK: 1.23
      }
    },
    {
      id: "456",
      name: "Shirts",
      cost: {
        USA: 7.99,
        CANADA: 11.99,
        UK: 2.22
      }
    },
    {
      id: "69",
      name: "Pants",
      cost: {
        USA: 8.99,
        CANADA: 12.99,
        UK: 3.22
      }
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_TOGGLE") {
    return {
      ...state,
      toggle: !state.toggle
      // user:{
      //   ...state.user,
      // country:(!state.toggle?"USA":"CANADA")
      // }
    };
  }

  if (action.type === "CHANGE_COUNTRY") {
    return {
      ...state,
      user: {
        ...state.user,
        country: action.country
      }
    };
  }

  return state;
};

export default rootReducer;
