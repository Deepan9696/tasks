import React, { useState } from 'react';

const ComponentA = () => {
  const [value, setValue] = useState('');

  // Function to update the value
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleValueChange} />
    </div>
  );
};

export default ComponentA;