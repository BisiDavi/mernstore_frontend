import React from 'react';
import { Alert } from 'react-bootstrap';

const Notify = ({ text }) => {
  return (
    <div className="Notify">
      <Alert variant="danger">
        <p className="font-weight-bold"> {text}</p>
      </Alert>
    </div>
  );
};

export default Notify;
