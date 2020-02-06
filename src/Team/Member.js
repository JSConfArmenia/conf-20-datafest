import React from 'react';
import { Title } from '../_components';

export default ({ name, position }) => (
  <li className="Member">
    <img alt={name} src={`/${name.split(' ')[0]}_${name.split(' ')[1]}.jpg`} />
    <Title className="Name" style={name === 'Zaven Navoyan' ? { width: 180 } : {}}>{name}</Title>
    <p className="Position">{position}</p>
    <div
      className="Splash"
      style={{ backgroundImage: `url(/team-splash-${name.split(' ')[0].toLowerCase()}.png)` }}
    />
  </li>
);
