import React from 'react';
import VoteOption from './VoteOption';
import { useVoteContext } from '../context/VoteContext';
import Results from './Results';
import mockData from '../mockData';
import AddOptionForm from './AddOptionForm';

const Voting = () => {
  const { votes, userVote, vote } = useVoteContext();

  // Create a map from option IDs to names
  const optionsMap = mockData.options.reduce((acc, option) => {
    acc[option.id] = option.name;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Voting App</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {!userVote ? (
          mockData.options.map((option) => (
            <VoteOption
              key={option.id}
              option={option.id}
              name={option.name}
              onVote={vote}
              className="mb-4"
            />
          ))
        ) : (
          <div>
            <p className="text-xl mb-4">Thank you for voting! You voted for {optionsMap[userVote]}</p>
            <Results votes={votes} optionsMap={optionsMap} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
