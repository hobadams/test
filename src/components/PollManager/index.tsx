import React, { useState } from 'react';
import Vote from '../Vote';
import Results from '../Results';
import { pollData, Poll } from '../../types/Poll';

const PollManager: React.FC = () => {
  const [showWinner, setShowWinner] = useState<boolean>(false);
  const { options, question } = pollData;
  //const [, setPollData] = useState<Poll>(initialPollData);

  return (
    <div className="layout-column align-items-center justify-content-start poll-manager" data-testid="poll-manager">
      <h2>{question}</h2>
      <Vote options={pollData.options} onVote={() => { }} viewWinner={false} />
      <Results poll={pollData} viewWinner={showWinner} setViewWinner={() => setShowWinner(true)} totalVotes={0} />
    </div>
  );
};

export default PollManager;
