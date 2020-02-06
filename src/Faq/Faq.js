/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Title, TitleAccent } from '../_components';
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
      <div className="row">
        <div className="col-md-12">
          <h3>Who is the target audience of DataFest Yerevan?</h3>
          <p>
            Many people have asked whether they should attend the conference or not.
            We have broadly divided potential attendants
            into groups and provide the following recommendations:
            <ol type="a" style={{ marginLeft: 30 }}>
              <li>
                Data Science/Machine Learning practitioners. <br />
                <b> Attendance Recommendation: </b>
                Yes, pretty much all the content is targeted for you.
              </li>
              <li>Students/professionals who actively learn machine learning,
                have completed online courses
                (such as Andrew Ng’s Machine Learning course or Deep Learning specialization),
                and can solve simple machine learning problems. <br />
                <b> Attendance Recommendation: </b
                > Yes, we think you will learn a lot and have great opportunities for networking.
              </li>
              <li>Professionals in fields closely associated with data science and machine learning,
                such as data engineers, data/business analysts and so on. <br />
                <b> Attendance Recommendation: </b>
                Although the primary focus of the conference is data science and machine learning,
                we think you will find at least some of the content useful.
              </li>
              <li>
                Students/professionals who are interested in
                machine learning, but have no prior experience. <br />
                <b> Attendance Recommendation: </b>
                Almost all of the content is above introductory level.
                If you want to get started with machine learning,
                it is better to start with some online courses.
                We strongly recommend Andrew Ng’s course
                : <a target="_blank" rel="noopener noreferrer" href="https://www.coursera.org/learn/machine-learning"> https://www.coursera.org/learn/machine-learning</a>,
                for a comprehensive list of resources see <a target="_blank" rel="noopener noreferrer" href="https://mlevn.org/education/">https://mlevn.org/education/</a>
              </li>
              <li>C-suite professionals,
                leads/management who are thinking about doing machine learning in their
                company, who, however, are not machine learning experts themselves. <br />
                <b> Attendance Recommendation: </b>
                The talks in the conference will be technical․
                However, you still may find some of the talks useful,
                and do some networking in-between.
              </li>
            </ol>
          </p>

          <h3>When will I be able to register?</h3>
          <p>
            We plan to open the registration in early March.
            The tickets will probably cost AMD 10.000 [ USD 21 ] for all three days.
            Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
  </div>
);
