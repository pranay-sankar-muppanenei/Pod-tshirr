import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const lines = e.target.value.split('\n');
    if (lines.length <= 3) {
      setText(e.target.value);
    }
  };

  return (
    <textarea
      className="text-input"
      value={text}
      onChange={handleChange}
      placeholder="Type up to 3 lines for your t-shirt..."
      rows={3}
    />
  );
};

export default TextInput;