import React, { createContext, useState, useContext } from 'react';

export const VoteContext = createContext();

export const useVoteContext = () => useContext(VoteContext);

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({ option1: 0, option2: 0 });
  const [userVote, setUserVote] = useState(null);

  const vote = (option) => {
    if (!userVote) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [option]: prevVotes[option] + 1,
      }));
      setUserVote(option);
    }
  };

  return (
    <VoteContext.Provider value={{ votes, userVote, vote }}>
      {children}
    </VoteContext.Provider>
  );
};
