import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({
  className,
  children,
  size,
  ...props
}) => (
  <h2
    className={`Title -size-${size} ${className}`}
    {...props}
  >
    {children}
  </h2>
);

Title.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object),
};

Title.defaultProps = {
  className: '',
  style: {},
  size: 'default',
};

export default Title;
