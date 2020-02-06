import React from 'react';
import { Title, TitleAccent } from '../_components';
import TeamList from './TeamList';
import Member from './Member';
import './Team.scss';

export default () => (
  <section id="team" className="Team">

    <div style={{ marginBottom: 25 }}>
      <Title>
        <TitleAccent color="primary2"> Organizers</TitleAccent>
      </Title>
      <ul className="List">
        {TeamList.map(member => (
          <Member key={member.name} position={member.position} name={member.name} />
        ))}
      </ul>
    </div>

    <Title style={{ margin: 0 }}>
          Co -
      <TitleAccent color="primary2"> Organizers</TitleAccent>
    </Title>
    <ul className="List">
      <Member key="AUA" position="" name="American University of Armenia" />
    </ul>
  </section>
);
