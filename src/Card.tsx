import * as React from 'react';

function Card({ id, name, age, onDelete }): JSX.Element {
  return (
    <div className="card-list">
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default React.memo(Card);
