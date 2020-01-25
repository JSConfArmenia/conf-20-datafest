import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapOptions from './mapOptions';
import { Button, TitleAccent, Title } from '../_components';
import './Location.scss';

const Marker = () => (
  <a
    rel="noopener noreferrer"
    href="https://www.google.com/maps/place/American+University+of+Armenia/@40.1930485,44.5022871,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd173fd4d621:0x213beef7d45c07c5!8m2!3d40.1930444!4d44.5044759?hl=en-US"
    target="_blank"
    className="Marker"
  >
    {/* <div className="MarkerIllustration" /> */}
    <Button
      color="orange"
      size="small"
    >
      We Are Here
    </Button>
    {/* <div className="MarkerText">
      We Are Here
    </div> */}
  </a>
);

export default () => (
  <section id="location" className="Location">
    <Title>
      <TitleAccent color="hero">Location</TitleAccent>
    </Title>
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultZoom={16}
        defaultCenter={{
          lat: 40.1930,
          lng: 44.5045,
        }}
        options={mapOptions}
      >
        <Marker
          lat={40.1930}
          lng={44.5045}
        />
      </GoogleMapReact>
    </div>
    <img className="Splash" alt="Splash" src="/location-splash.png" />
  </section>
);
