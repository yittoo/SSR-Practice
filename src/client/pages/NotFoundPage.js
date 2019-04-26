import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Boi, no page here</h1>;
};

export default { component: NotFoundPage };
