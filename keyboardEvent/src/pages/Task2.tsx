import React from 'react';

const Task2 = ({ sona }) => {
  return (
    <div>
      <h1>Rendered Sona Prop</h1>
      {Object.entries(sona).map(([key, value]) => (
        <div key={key}>
          Key: {key}, Value: {value}
        </div>
      ))}
    </div>
  );
};

export default Task2;