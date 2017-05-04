import React from 'react';

export const ThoughtCard = ({ thought }) => {
  return (
    <div className='thoughtCard'>
      <h3 className='title'>Title:</h3>
      <p className='titleContent'>{thought.title}</p>
      <h3 className='body'>Body:</h3>
      <p className='bodyContent'>{thought.body}</p>
    </div>
  )
};
