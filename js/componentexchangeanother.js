import React from 'react';
import ComponentA from './ComponentA';

const ComponentB = () => {
  // Define a state variable to hold the received value
  const [receivedValue, setReceivedValue] = useState('');

  // Callback function to update the received value
  const updateReceivedValue = (value) => {
    setReceivedValue(value);
  };

  return (
    <div>
      <ComponentA value={receivedValue} onUpdate={updateReceivedValue} />
      <p>Received Value: {receivedValue}</p>
    </div>
  );
};

export default ComponentB;
