import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Notify = ({ pageLink, linkText, text }) => {
  return (
    <div className="Notify">
      <Alert variant="danger" className="d-flex align-items-center h-25">
        <p className="font-weight-bold pt-3"> {text}</p>
        <span className="ml-2">
          <Link to={pageLink}>
            <u>{linkText}</u>
          </Link>
        </span>
      </Alert>
    </div>
  );
};

export default Notify;
