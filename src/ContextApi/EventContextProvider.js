import React from "react";
import EventContext from "./EventContext";
import all_products from "../Assets/all_products"; // Import all_products

const EventContextProvider = (props) => {
  const contextValue = {
    all_products: all_products, // Provide the data correctly
  };

  return (
    <EventContext.Provider value={contextValue}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
