const intialState = {
  age: 21
};

const reducer = (state = intialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age++;
      break;

    case "AGE_DOWN":
      newState.age--;
      break;

    default:
      console.log("not valid case");
      break;
  }
  return newState;
};

export default reducer;
