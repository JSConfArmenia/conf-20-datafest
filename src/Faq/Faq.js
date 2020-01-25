/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import { Link } from 'react-scroll';

import { TitleAccent, Title } from '../_components';
import './Faq.css';

export default () => (
  <div id="faq" className="FAQ">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Title>
            Frequently Asked
            <TitleAccent color="primary1"> Questions</TitleAccent>
          </Title>
        </div>
      </div>
    </div>
  </div>
);
