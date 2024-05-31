import React from "react";
import Scoops from "./components/Scoops/Scoops";
import Toppings from "./components/Toppings/Toppings";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="d-flex flex-column gap-5 bg-dark min-vh-100 text-light px-3 py-5">
      <Scoops />
      <Toppings />
      <Form />
    </div>
  );
};

export default App;
