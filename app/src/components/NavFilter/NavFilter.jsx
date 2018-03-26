import React from 'react';
import PropTypes from 'prop-types';
import './NavFilter.css';

const getClassName = (type, activeType) => {
  let className = 'nav-item';
  if (type.toLowerCase() === activeType.toLowerCase()) {
    className += ' active';
  }
  return className;
};

const NavFilter = ({ types, activeType, changeActiveType }) => (
  <nav>
    {types.length > 0 &&
      <div
        className={getClassName('all', activeType)}
        onClick={changeActiveType('all')}
        onKeyPress={changeActiveType('all')}
        role="button"
        tabIndex={0}
      >
      All
      </div>
    }
    {types.map(type => (
      <div
        key={type}
        className={getClassName(type, activeType)}
        onClick={changeActiveType(type)}
        onKeyPress={changeActiveType(type)}
        role="button"
        tabIndex={0}
      >
        {type}
      </div>
    ))}
  </nav>
);

NavFilter.propTypes = {
  types: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  activeType: PropTypes.string.isRequired,
  changeActiveType: PropTypes.func.isRequired,
};

export default NavFilter;
