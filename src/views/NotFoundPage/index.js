import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../pathСonstants';
import { Title, Text } from './styled';
const NotFoundPage = () => (
  <div>
    <Title>404</Title>
    <Title>Not Found!</Title>
    <Link to={HOME}>
      <Text>Go Home</Text>
    </Link>
  </div>
);

export default NotFoundPage;