import * as React from 'react';
import Card from './src/Card';
import './style.css';

const DATA = [
  { id: 1, name: 'Ilham Novriadi', age: 20 },
  { id: 2, name: 'Rudi Gunawan', age: 18 },
];

export default function App() {
  const [color, setColor] = React.useState('light');
  const [counter, setCounter] = React.useState(1);
  const onDelete = React.useCallback((id) => console.log('DELETE' + id), []);

  const handleColorLight = () => {
    setColor('light');
    setCounter((prev) => prev - 1);
    console.log('light');
  };

  const handleColorDark = () => {
    setColor('dark');
    setCounter((prev) => prev + 1);
    console.log('dark');
  };

  const checkColor = React.useMemo(() => {
    console.log('CHECK COLOR');
    return color;
  }, [color]);

  return (
    <div className={`container ${color}`}>
      <h3>React memo & useMemo</h3>
      <div className="wrapper-card-list">
        {DATA.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            age={item.age}
            onDelete={onDelete}
          />
        ))}
      </div>
      <h3>
        {checkColor} {counter}
      </h3>
      <button onClick={handleColorLight}>LIGHT</button>
      <button onClick={handleColorDark}>DARK</button>
    </div>
  );
}
