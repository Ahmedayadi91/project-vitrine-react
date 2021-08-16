import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC cars!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= 'https://mediapool.bmwgroup.com/cache/P9/202005/P90389688/P90389688-the-bmw-7-series-05-2020-2000px.jpg'
              text='730LI PURE EXCELLENCE'
              label='BMW Série 7'
              path='/services'
            />
            <CardItem
              src='https://www.sayarti.tn/wp-content/uploads/2021/04/mercedes-benz-glc-amg-prix-tunisie.jpg'
              text='200 AMG coupé'
              label='Mercedes-Benz GLC 200 coupé AMG'
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://1.bp.blogspot.com/-dFt1gAsFRhE/X1lJwsSgYaI/AAAAAAAAb78/r1CsPTRT2Xkg5tNhxUO4e1w2s1xp0wJbwCLcBGAsYHQ/s962/citroen-c4-gris-acier-gris-clair-2021.jpg'
              text='CITROËN C4 AIRCROSS'
              label='C4'
              path='/services'
            />
            <CardItem
              src='https://www.turbo.fr/sites/default/files/styles/slideshow_images/public/slideshow/slides/2021-04/60755eece9f48.jpg?itok=APc8uGB4'
              text='Tesla Model 3'
              label='Tesla Model 3'
              path='/products'
            />
            <CardItem
              src='https://www.sayarti.tn/wp-content/uploads/2020/11/kia-seltos-prix-neuf-tunisie.jpg'
              text='1.4 T-GDI'
              label='kia-seltos'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;