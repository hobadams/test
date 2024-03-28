import React, { useState } from 'react';
import Vote from '../Vote';
import Results from '../Results';
import { pollData, Poll } from '../../types/Poll';

const PollManager: React.FC = () => {
  return (
    <div className="layout-column align-items-center justify-content-start poll-manager" data-testid="poll-manager">
      <h2>Add Question Here</h2>
      <Vote options={pollData.options} onVote={() => {}} viewWinner={false} />
      <Results poll={pollData} viewWinner={false} setViewWinner={() => {}} totalVotes={0} />
    </div>
  );
};

export default PollManager;
