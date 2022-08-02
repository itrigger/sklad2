import React from "react";
import { ApolloWrapper } from "../apollo/ApolloWrapper";


const wrapper = ({ element }) => {
  return (

      <ApolloWrapper>
        {element}
      </ApolloWrapper>

  );
};

export default wrapper;
