import React from 'react';

import './Speakers.scss';
import speakersSerivce from '../_services/speakers';

import Title, { TitleAccent } from '../_components/Title';
// import Description from '../_components/Description';
// import Button from '../_components/Button';
import SpeakerCard from './SpeakerCard';


const speakersList = [
  'Aleksey_Natekin',
  'Manvel_Avetissian',
  'Ines_Montani',
  'Vahe_Hakobyan',
  'Dmytro_Fedyukov',
  'Hrayr_Harutyunyan',
  'Shushan_Arakelyan',
  'Levan_Tsinadze',
  'George_Kasparyants',
  'Hrant_Khachatrian',
  'Arsen_Yeghiazaryan',
  'Jonay_Trenous',
  'Stepan_Sargsyan',
  'Andranik_Khachatryan',
  'Zaven_Navoyan',
  'Matthew_Honnibal',
  'Davit_Kocharian',
  'Shant_Navasardyan',
  'Karen_Hambardzumyan',
  'Erik_Harutyunyan',
  'Artur_Kobelyan',
  'Robert_Yenokyan',
].map(id => ({
  id,
  ...speakersSerivce[id],
}));

const Speakers = () => (
  <section id="speakers" className="Speakers">
    <div className="container">
      <div className="SpeakersTitleContainer">
        <Title>
          DataFest
          <TitleAccent color="hero"> Speakers</TitleAccent>
        </Title>
      </div>
      <div className="row">
        {speakersList.map(speaker => (
          <div
            className="col-md-6"
            key={speaker.id}
          >
            <SpeakerCard {...speaker} />
          </div>
        ))}
      </div>
      {/* <div className="row SpeakersApplicationContainer">
        <div className="col-lg-6 order-lg-2">
          <div className="SectionBox">
            <Title>
              Call for
              <TitleAccent color="hero"> Speakers</TitleAccent>
            </Title>
            <Description>
              Share your knowledge and skills in React or React Native with the Armenian
              React community. Become a React Conf 2019 speaker!
            </Description>
            <Button link href="http://bit.ly/speakReact">Become a SPEAKER</Button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="IllustrationContainer">
            <img
              className="Illustration"
              src="./speakers.png"
              alt="React Conf Armenia Speakers"
            />
          </div>
        </div>

      </div> */}
    </div>
  </section>
);

export default Speakers;
