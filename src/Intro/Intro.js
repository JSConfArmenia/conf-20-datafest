import React from 'react';

import './Intro.scss';

const Intro = () => (
  <section id="intro" className="Intro">
    <div className="IntroContainer">
      <div className="Info">
        <p>
DataFest is postponed due to the situation with
          <span style={{
            paddingLeft: 3,
            fontSize: 30,
            color: 'rgb(217, 29, 189)',
            whiteSpace: 'nowrap',
          }}
          >
Corona virus
          </span>
.
        </p>
        <p> Exact dates will be posted later.</p>
        {/* <p>American University of Armenia</p> */}
        {/* <p>April 9-11, 2020</p> */}
      </div>
      <h1>DataFest Yerevan</h1>
    </div>
  </section>
);

export default Intro;
