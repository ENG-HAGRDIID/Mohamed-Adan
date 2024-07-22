import React from 'react';

const Results = ({ votes = {}, optionsMap = {} }) => {
  if (!votes || !optionsMap) {
    return <p className="text-red-500">Results data is not available.</p>;
  }
  const totalVotes = Object.values(votes).reduce((total, count) => total + count, 0);
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      {Object.keys(votes).length === 0 ? (
        <p className="text-lg">No votes yet.</p>
      ) : (
        Object.keys(votes).map((option) => (
          <div key={option} className="flex justify-between items-center p-2 border-b">
            <span className="text-lg">{optionsMap[option] || 'Unknown Option'}</span>
            <span className="text-lg">{votes[option]}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
