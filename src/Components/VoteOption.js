import React from 'react';

const VoteOption = ({ option, name, onVote, className }) => {
  return (
    <div className={`flex justify-between items-center p-4 border rounded-lg ${className}`}>
      <span className="text-lg">{name}</span>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => onVote(option)}
      >
        Vote
      </button>
    </div>
  );
};

export default VoteOption;
