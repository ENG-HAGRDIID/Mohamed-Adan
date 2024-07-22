import React, { useState, useContext } from 'react';
import { VoteContext } from '../context/VoteContext';

const AddOptionForm = () => {
  const [optionName, setOptionName] = useState('');
  const { votes, handleVote } = useContext(VoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add a new option (this would typically involve updating state or calling an API)
    console.log('New option added:', optionName);
    setOptionName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={optionName}
        onChange={(e) => setOptionName(e.target.value)}
        placeholder="New Option Name"
      />
      <button type="submit">Add Option</button>
    </form>
  );
};

export default AddOptionForm;
