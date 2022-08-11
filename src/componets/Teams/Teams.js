import React from 'react';
import './Teams.scss';
import Carousel from 'react-elastic-carousel';
const Teams = () => {
  const teams = [
    {
      name: 'Bobby Stanley',
      img: '/img/d-own.png',
      para: 'Obstetrics & Gynaecology',
      local: 'New York',
    },
    {
      name: 'Janice Hughes',
      img: '/img/d-tow.webp',
      para: 'Obstetrics & Gynaecology',
      local: 'New York',
    },
    {
      name: 'Carmen Nelson',
      img: '/img/d-own.png',
      para: 'Obstetrics & Gynaecology',
      local: 'New York',
    },
    {
      name: 'Rebecca Gilbert',
      img: '/img/d-four.png',
      para: 'Obstetrics & Gynaecology',
      local: 'New York',
    },
    {
      name: 'Matthew Reyes',
      img: '/img/d-own.png',
      para: 'Obstetrics & Gynaecology',
      local: 'New York',
    },
    {
      name: 'Janice Hughes',

      img: '/img/d-sex.png',
      para: 'Obstetrics & Gynaecology',
      local: 'New York',
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1000, itemsToShow: 4 },
  ];
  return (
    <section className="teams">
      <div className="title">
        <p>Meet Our Team</p>
        <h2>Our Creative Team</h2>
      </div>
      <img src="/img/team.png" alt="team" />
      <div className="team">
        <Carousel
          breakPoints={breakPoints}
          showArrows={true}
          pagination={false}
          itemsToShow={4}
        >
          {teams.map((team, i) => (
            <div className="team-card">
              <img src={team.img} alt="doctor" />
              <div className="card-contact">
                <h3>{team.name}</h3>
                <p>{team.para}</p>
                <div className="loc">{team.local}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Teams;
