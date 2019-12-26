const { createStore } = require("redux");

const intialState = {
  age: 21
};

const myReducer = (state = intialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.value;
  }
  if (action.type === "SUBTRACT") {
    newState.age -= action.value;
  }

  return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
  console.log("State Changed: " + JSON.stringify(store.getState()));
});

//Dispatch Add
store.dispatch({ type: "ADD", value: 10 });
//Dispatch Subtrac
store.dispatch({ type: "SUBTRACT", value: 5 });
