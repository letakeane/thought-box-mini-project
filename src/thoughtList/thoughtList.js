import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';

export const ThoughtList = ({ thoughtList }) => {
  return (
    <div className='thoughtList'>
      <h2>ThoughtList</h2>
      {thoughtList.map((thought, index) => {
        return (
            <ThoughtCard key={index} thought={thought} />
          )
      })}
    </div>
  );
}
