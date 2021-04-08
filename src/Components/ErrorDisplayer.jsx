import React from "react";
import Homepage from "./Homepage";

const ErrorDisplayer = ({ status, msg }) => {
  return (
    <main>
      <br />
      <br />
      <br />
      <br />

      <h1>Whoops, I think you might have made a mistake</h1>
      <p>
        {status} : {msg}
      </p>
      <h3>Don't worry, below is the homepage, have another go!</h3>
      <Homepage />
    </main>
  );
};

export default ErrorDisplayer;
