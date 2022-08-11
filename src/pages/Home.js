import React from 'react';
import Info from '../componets/Info/Info';
import Medlab from '../componets/medlab/Medlab';
import Partner from '../componets/Partner/Partner';
import Process from '../componets/Process/Process';
import Services from '../componets/Services/Services';
import Slider from '../componets/slider/Slider';
import Spicielite from '../componets/spicielite/Spicielite';
import Teams from '../componets/Teams/Teams';

const Home = () => {
  return (
    <div>
      <Slider />
      <Spicielite />
      <Medlab />
      <Info />
      <Services />
      <Partner />
      <Process />
      <Teams />
    </div>
  );
};

export default Home;
