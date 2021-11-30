import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img1 from './images/img-1.jpg.png';
import Img2 from './images/img-2.jpg.jpg';
import Img3 from './images/img-8.jpg.png';
import Img4 from './images/1542298796.jpg';
import Img5 from './images/nature.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Building the future</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             img src={Img1} 
                        text="Collaborative ideas"
                        label="Try it now"
                      
            />
            <CardItem
              img src={Img2} 
                        text="Best Services"
                        label="Try it now"
                      
            />
            </ul>
             <ul className='cards__items'>
            <CardItem
              img src={Img3} 
                        text="Eco-friendly"
                        label="Try it now"
                      
            />
            <CardItem
              img src={Img4} 
                        text="One step at a time"
                        label="Try it now"
                        
            />

          </ul>
          <ul className='cards__items'>
           
            <CardItem
              img src={Img5} 
                        text="Get started using our services with a 30-day free trail"
                        label="Try it now"
                        
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;