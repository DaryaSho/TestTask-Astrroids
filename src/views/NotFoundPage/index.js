import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../pathСonstants';
const NotFoundPage = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to={HOME}>
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;