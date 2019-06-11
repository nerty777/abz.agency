import React from 'react';
import { components } from 'react-select';

import Sprite from '../../../assets/icons/sprite.svg';

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <svg className="select__img">
      <use xlinkHref={`${Sprite}#icon-caret-down`} />
    </svg>
  </components.DropdownIndicator>
);

export default DropdownIndicator;
