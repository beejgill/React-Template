import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out my projects!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='images/img-9.jpg' text='Here is my GitHub link.' label='GitHub' path='/' />
                    <CardItem src='images/img-2.jpg' text='Here is my GitHub link.' label='GitHub' path='/' />
                </ul>
                <ul className='cards__items'>
                    <CardItem src='images/img-9.jpg' text='Here is my GitHub link.' label='GitHub' path='/' />
                    <CardItem src='images/img-2.jpg' text='Here is my GitHub link.' label='GitHub' path='/' />
                    <CardItem src='images/img-2.jpg' text='Here is my GitHub link.' label='GitHub' path='/' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards