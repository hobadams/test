import React, { useState } from 'react';
import Vote from '../Vote';
import Results from '../Results';
import { pollData as initialPollData, Poll } from '../../types/Poll';

const PollManager: React.FC = () => {
  const [showWinner, setShowWinner] = useState<boolean>(false);
  const [pollData, setPollData] = useState<Poll>(initialPollData);

  const vote = (id: number) => {
    const updatedPollData = { ...pollData };
    const option = updatedPollData.options.find((option) => option.id === id);
    if (option) {
      option.votes += 1;
      setPollData(updatedPollData);
    }
  }

  return (
    <div className="layout-column align-items-center justify-content-start poll-manager" data-testid="poll-manager">
      <h2>{pollData.question}</h2>
      <Vote options={pollData.options} onVote={vote} viewWinner={showWinner} />
      <Results poll={pollData} viewWinner={showWinner} setViewWinner={setShowWinner} totalVotes={0} />
    </div>
  );
};

export default PollManager;
